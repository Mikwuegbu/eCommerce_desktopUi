import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { productsType } from "../types/products";

export interface CartState {
	products: productsType[];
}

const initialState: CartState = {
	products: [],
};

const cartReducer = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToCart(state, action: PayloadAction<productsType>) {
			const existingProduct = state.products.find(
				(product) => product.id === action.payload.id
			);
			if (existingProduct) {
				state.products = state.products.map((product) =>
					product.id === action.payload.id
						? { ...product, quantity: product.quantity + 1 }
						: product
				);
			} else {
				state.products = [
					...state.products,
					{ ...action.payload, quantity: 1 },
				];
			}
		},
		removeFromCart(state, action: PayloadAction<number>) {
			state.products = state.products.filter(
				(product) => product.id !== action.payload
			);
		},
	},
});

export const { addToCart, removeFromCart } = cartReducer.actions;
export default cartReducer.reducer;
