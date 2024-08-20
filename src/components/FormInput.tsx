import { formAttributes } from "../types/authTypes";

//authentication form Components
const FormInput = ({
	type,
	className,
	placeholder,
	id,
	inputChange,
}: formAttributes) => {
	return (
		<>
			<input
				required
				id={id}
				type={type}
				className={className}
				placeholder={placeholder}
				onChange={inputChange}
			/>
		</>
	);
};

export default FormInput;
