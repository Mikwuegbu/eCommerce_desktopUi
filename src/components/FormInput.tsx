import { formAttributes } from '../types/authTypes';

//authentication form Components
const FormInput = ({ type, className, placeholder }: formAttributes) => {
	return (
		<>
			<input
				required
				type={type}
				className={className}
				placeholder={placeholder}
			/>
		</>
	);
};

export default FormInput;
