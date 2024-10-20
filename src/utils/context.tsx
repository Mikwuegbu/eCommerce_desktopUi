import { createContext, Dispatch } from "react";

// context type --this is what is being provided
type exploreContextType = {
  location: string;
  dispatch: Dispatch<exploreAction>;
};

//context manager
export const ExploreContext = createContext<exploreContextType | undefined>(
  undefined,
);

// reducer Action type
type exploreAction = { type: string; payload: string };

//TODO: implement useAuth
