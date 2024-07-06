interface formAttributes {
	type: 'text' | 'email' | 'password';
	className: string;
	placeholder: string;
}

const FormInput = ({ type, className, placeholder }: formAttributes) => {
	return (
		<>
			<input type={type} className={className} placeholder={placeholder} />
		</>
	);
};

export default FormInput;
