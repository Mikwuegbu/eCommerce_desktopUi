import {
	createContext,
	useReducer,
	Dispatch,
	Reducer,
	ReactNode,
	FC,
	useState,
} from 'react';
import { productsType } from '../../types/products';
import data from './products.json';

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

type exploreType =
	| 'explore'
	| 'new in'
	| 'clothing'
	| 'shoes'
	| 'accessories'
	| 'activewear'
	| 'gifts'
	| 'inspiration'
	| string; // For dynamic locations

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
		case 'explore':
		case 'New in':
		case 'Clothing':
		case 'Shoes':
		case 'Accessories':
		case 'Activewear':
		case 'Gifts & Living':
		case 'Inspiration':
			return action.payload;
		default:
			return state;
	}
};

const Provider: FC<{ children: ReactNode }> = ({ children }) => {
	//useReducer --with the initial state and action typeChecked
	const [location, dispatch] = useReducer<Reducer<exploreType, exploreAction>>(
		exploreReducer,
		'explore'
	);
	const [cartItems, setCartItems] = useState<productsType[]>([]);
	const products = data.products;
	const [quantity, setQuantity] = useState<number>(1);

	return (
		<ProductContext.Provider value={{ products, cartItems, setCartItems }}>
			<QuantityContext.Provider value={{ quantity, setQuantity }}>
				<ExploreContext.Provider value={{ location, dispatch }}>
					{children}
				</ExploreContext.Provider>
			</QuantityContext.Provider>
		</ProductContext.Provider>
	);
};

export default Provider;
