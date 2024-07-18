import {
	createContext,
	useReducer,
	Dispatch,
	Reducer,
	ReactNode,
	FC,
} from 'react';

//context manager
export const ExploreContext = createContext<exploreContextType | undefined>(
	undefined
);

export type exploreType =
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

//Reducer --this is the the reducer function
const exploreReducer: Reducer<exploreType, exploreAction> = (state, action) => {
	switch (action.type) {
		case 'explore':
			return (action.payload = action.type);
		case 'New in':
			return (action.payload = action.type);
		case 'Clothing':
			return (action.payload = action.type);
		case 'Shoes':
			return (action.payload = action.type);
		case 'Accessories':
			return (action.payload = action.type);
		case 'Activewear':
			return (action.payload = action.type);
		case 'Gifts & Living':
			return (action.payload = action.type);
		case 'Inspiration':
			return (action.payload = action.type);
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
	return (
		<ExploreContext.Provider value={{ location, dispatch }}>
			{children}
		</ExploreContext.Provider>
	);
};

export default Provider;
