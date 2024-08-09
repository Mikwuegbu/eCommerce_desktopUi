import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { productsType } from "../types/products";

export type CartState = {
	items: productsType[];
};

const initialState: CartState = {
	items: [],
};

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addItemToCart: (state, action: PayloadAction<productsType>) => {
			const existingItem = state.items.find(
				(item) => item.id === action.payload.id
			);

			if (existingItem) {
				// -- if the items already exists then return the existing item
				existingItem;
			} else {
				state.items.push({ ...action.payload, quantity: 1 });
			}
		},
		removeItemFromCart: (state, action: PayloadAction<number>) => {
			state.items = state.items.filter((item) => item.id !== action.payload);
		},
		updateItemQuantity: (
			state,
			action: PayloadAction<{ productId: number; quantity: number }>
		) => {
			const item = state.items.find(
				(item) => item.id === action.payload.productId
			);
			if (item) {
				item.quantity = action.payload.quantity;
			}
		},
	},
});

export const { addItemToCart, removeItemFromCart, updateItemQuantity } =
	cartSlice.actions;

export default cartSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";
// import { PayloadAction } from "@reduxjs/toolkit";
// import { productsType } from "../types/products";

// export type CartState = {
// 	items: productsType[];
// };

// const initialState: CartState = {
// 	items: [],
// };

// export const cartSlice = createSlice({
// 	name: "cart",
// 	initialState,
// 	reducers: {
// 		addItemToCart: (state, action: PayloadAction<productsType>) => {
// 			const existingItem = state.items.find(
// 				(item) => item.id === action.payload.id
// 			);
// 			if (existingItem) {
// 				existingItem;
// 			} else {
// 				state.items.push({ ...action.payload, quantity: 1 });
// 			}
// 		},
// 		removeItemFromCart: (state, action: PayloadAction<productsType>) => {
// 			state.items = state.items.filter((item) => item.id !== action.payload.id);
// 		},
// 		updateItemQuantity: (
// 			state,
// 			action: PayloadAction<{ productId: number; quantity: number }>
// 		) => {
// 			const item = state.items.find(
// 				(item) => item.id === action.payload.productId
// 			);
// 			if (item) {
// 				item.quantity = action.payload.quantity;
// 			}
// 		},
// 	},
// });

// export const { addItemToCart, removeItemFromCart, updateItemQuantity } =
// 	cartSlice.actions;

// export default cartSlice.reducer;
