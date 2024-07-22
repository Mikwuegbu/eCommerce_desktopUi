import { formAttributes } from '../types/authTypes';

//authentication form Components
const FormInput = ({ type, className, placeholder, id }: formAttributes) => {
	return (
		<>
			<input
				required
				id={id}
				type={type}
				className={className}
				placeholder={placeholder}
			/>
		</>
	);
};

export default FormInput;
