import { Link } from "react-router-dom";
import { backArrow } from "../../../assets/icons/icons";
import AuthButton from "../../../components/AuthButton";
import FormInput from "../../../components/FormInput";

const PasswordReset = () => {
	return (
		<div className='md:my-24 my-16 lg:mx-40 grid justify-center'>
			<div className='space-y-16 mx-4 lg:relative fixed left-0 right-0 md:mx-36'>
				<h1 className='font-medium md:text-5xl text-center lg:text-justify text-nowrap text-4xl'>
					Password reset
				</h1>
				<div className='flex flex-col space-y-4 mt-4 lg:w-[400px]'>
					<div className='font-medium text-sm flex space-x-2 '>
						<p className='opacity-40'>We sent the code to </p>
						<p>name@mail.domain</p>
					</div>
					<div className='flex flex-col space-y-6'>
						<FormInput
							type='email'
							className='border px-5 py-3 rounded-xl border-[#00000066]'
							placeholder='Email'
						/>
						<AuthButton
							displayText='Continue'
							className='flex justify-center items-center font-medium text-base text-nowrap bg-black text-white px-16 rounded-xl h-[60px]'
						/>
					</div>
					<div className='flex font-medium text-sm space-x-2'>
						<p className='opacity-40'>Didn't receive the email? </p>
						<a href='#' className='underline'>
							Click to resend
						</a>
					</div>
				</div>

				<Link
					to='/forgotten'
					className='font-medium lg:flex items-center space-x-2 pt-52 hidden'
				>
					<img src={backArrow} alt={backArrow} className='h-4 w-4' />
					<p className='text-base'>Back</p>
				</Link>
			</div>
		</div>
	);
};

export default PasswordReset;
