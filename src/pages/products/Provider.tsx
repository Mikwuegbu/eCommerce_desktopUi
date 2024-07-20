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
	return (
		<ExploreContext.Provider value={{ location, dispatch }}>
			{children}
		</ExploreContext.Provider>
	);
};

export default Provider;
