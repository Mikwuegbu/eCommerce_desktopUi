import { Link } from "react-router-dom";
import { backArrow } from "../../../assets/icons/icons";
import AuthButton from "../../../components/AuthButton";
import FormInput from "../../../components/FormInput";

const ForgotPassword = () => {
	return (
		<div className='md:my-24 my-16 lg:mx-40 grid justify-center'>
			<div className='md:space-y-16 space-y-10 md:fixed left-0 right-0 mx-4 md:mx-36'>
				<h1 className='font-medium md:text-5xl text-4xl lg:text-justify text-center text-nowrap'>
					Forgot password
				</h1>
				<div className='flex flex-col space-y-6 mt-4 lg:w-[400px]'>
					<p className='font-medium text-sm'>
						Enter the email address you used when you joined and we’ll send you
						code to reset your password.
					</p>
					<FormInput
						type='email'
						className='border px-5 py-3 rounded-xl border-[#00000066]'
						placeholder='Email'
					/>
					<AuthButton
						displayText='Continue'
						className='flex justify-center items-center font-medium text-base bg-black text-white px-16 rounded-xl h-[60px]'
					/>
				</div>

				<Link
					to='/login'
					className='font-medium lg:flex items-center space-x-2 pt-52 hidden'
				>
					<img src={backArrow} alt={backArrow} className='h-4 w-4' />
					<p className='text-base'>Back</p>
				</Link>
			</div>
		</div>
	);
};

export default ForgotPassword;
