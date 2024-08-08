import {
	createContext,
	useReducer,
	Dispatch,
	Reducer,
	ReactNode,
	FC,
} from "react";
import { productsType, exploreType } from "../types/products";

//context manager
export const ExploreContext = createContext<exploreContextType | undefined>(
	undefined
);

export const ProductContext = createContext<productContextType | undefined>(
	undefined
);

export const QuantityContext = createContext<quantityContextType | undefined>(
	undefined
);

// reducer Action type
type exploreAction = { type: exploreType; payload: exploreType };

// context type --this is what is being provided
type exploreContextType = {
	location: string;
	dispatch: Dispatch<exploreAction>;
};

// context type --this is what is being provided
type productContextType = {
	cartItems: productsType[] | undefined;
	setCartItems: Dispatch<productsType[]>;
	products: productsType[];
};

type quantityContextType = {
	quantity: number;
	setQuantity: Dispatch<number>;
};

//Reducer --this is the the reducer function
const exploreReducer: Reducer<exploreType, exploreAction> = (state, action) => {
	switch (action.type) {
		case "explore":
		case "New in":
		case "Clothing":
		case "Shoes":
		case "Accessories":
		case "Activewear":
		case "Gifts & Living":
		case "Inspiration":
			return action.payload;
		default:
			return state;
	}
};

const ContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
	const [location, dispatch] = useReducer<Reducer<exploreType, exploreAction>>(
		exploreReducer,
		"explore"
	);
	return (
		<ExploreContext.Provider value={{ location, dispatch }}>
			{children}
		</ExploreContext.Provider>
	);
};

export default ContextProvider;
