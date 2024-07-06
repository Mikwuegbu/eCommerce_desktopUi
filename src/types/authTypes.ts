// authentication button types
export interface authButton {
	displayText: string;
	className: string;
	children?: React.ReactNode;
	onClick?: React.EventHandler<React.MouseEvent<HTMLButtonElement>>;
	disabled?: boolean;
}

//authentication formInput types
export interface formAttributes {
	type: 'text' | 'email' | 'password';
	className: string;
	placeholder: string;
}
