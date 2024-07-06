import { formAttributes } from '../types/authTypes';

//authentication form Components
const FormInput = ({ type, className, placeholder }: formAttributes) => {
	return (
		<>
			<input type={type} className={className} placeholder={placeholder} />
		</>
	);
};

export default FormInput;
