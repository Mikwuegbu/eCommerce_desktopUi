import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { userType } from "../types/userType";

const userApi = "http://localhost:3000/users";

type userCredentials = {
  email: string;
  password: string | number;
};
export const login = createAsyncThunk(
  "auth/login",
  async (credentials: userCredentials, thunkAPI) => {
    try {
      const response = await axios.get(userApi);
      if (response.data) {
        const validUser: userType = response.data.find(
          (user: userType) =>
            user.password === credentials.password &&
            user.email === credentials.email,
        );
        if (validUser) {
          return validUser;
        } else {
          return thunkAPI.rejectWithValue("Invalid credentials");
        }
      }
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

type ThunkApiConfig = {
  rejectValue: string;
};

export const signUp = createAsyncThunk<userType, userType, ThunkApiConfig>(
  "auth/signUp",
  async (userData, thunkAPI) => {
    try {
      const UserResponse = await axios.get(userApi);
      const userEmailExists = UserResponse.data.find(
        (user: userType) => user.email === userData.email,
      );
      if (userEmailExists) {
        return thunkAPI.rejectWithValue("User with this email already exists");
      } else {
        const response = await axios.post(userApi, {
          name: userData.name,
          email: userData.email,
          password: userData.password,
        });
        return response.data;
      }
    } catch (error: any) {
      // Check if the error is an Axios error
      if (axios.isAxiosError(error)) {
        return thunkAPI.rejectWithValue(
          error.response?.data || "Something went wrong",
        );
      } else {
        return thunkAPI.rejectWithValue(
          error.message || "An unexpected error occurred",
        );
      }
    }
  },
);

type UserState = {
  user: userType | null | string;
  status: "idle" | "loading" | "success" | "failed";
  isAuthenticated: boolean;
  error: unknown | null;
};

const initialUserState: UserState = {
  user: null,
  status: "idle",
  isAuthenticated: false,
  error: null,
};

const userSlice = createSlice({
  name: "auth",
  initialState: initialUserState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUp.pending, (state) => {
        state.status = "loading";
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.status = "success";
        state.user = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(login.pending, (state) => {
        state.status = "loading";
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload!.email;
        state.status = "success";
        state.isAuthenticated = true;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.user = null;
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default userSlice.reducer;
export const { logout } = userSlice.actions;
