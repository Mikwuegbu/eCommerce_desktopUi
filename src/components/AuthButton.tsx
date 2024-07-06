interface authButton {
	displayText: string;
	className: string;
	children?: React.ReactNode;
	onClick?: React.EventHandler<React.MouseEvent<HTMLButtonElement>>;
	disabled?: boolean;
}

const AuthButton = ({ displayText, className, children }: authButton) => {
	return (
		<>
			<button className={className}>
				{children}
				{displayText}
			</button>
		</>
	);
};

export default AuthButton;
