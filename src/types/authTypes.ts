import { ChangeEventHandler, EventHandler } from "react";

// authentication button types
export interface authButton {
	displayText: string;
	className: string;
	children?: React.ReactNode;
	btnClick?: EventHandler<React.MouseEvent<HTMLButtonElement>>;
	disabled?: boolean;
	type?: "submit" | "reset";
}

//authentication formInput types
export interface formAttributes {
	type: string;
	className: string;
	placeholder: string;
	id?: string;
	inputChange?: ChangeEventHandler<HTMLInputElement>;
}
