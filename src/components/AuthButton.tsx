import { authButton } from "../types/authTypes";

//authentication Button component
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
