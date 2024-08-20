import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import userReducer from "./authSlice";

export const store = configureStore({
	reducer: {
		cart: cartReducer,
		user: userReducer,
	},
});

export type storeType = {
	cart: ReturnType<typeof cartReducer>;
	user: ReturnType<typeof userReducer>;
};
export type AppDispatch = typeof store.dispatch;
