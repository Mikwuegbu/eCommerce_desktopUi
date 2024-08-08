import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./index";

export const cartStore = configureStore({
	reducer: {
		cart: cartReducer,
	},
});

export type RootState = ReturnType<typeof cartStore.getState>;
export type AppDispatch = typeof cartStore.dispatch;

// Optional: Type for the store
export type AppStore = typeof cartStore;
