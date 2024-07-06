import { Link } from 'react-router-dom';
import AuthButton from '../../components/AuthButton';
import FormInput from '../../components/FormInput';
import { appleIcon, googleIcon } from '../../assets/icons/icons';

const CreateAccount = () => {
	return (
		<div className="my-24 mx-40 grid justify-center">
			<div className="space-y-12">
				<h1 className="text-center font-medium text-5xl">Create account</h1>
				<div className="">
					<p className="font-medium text-sm">
						Let's get started with your 30 days trial
					</p>
					<form className="flex flex-col space-y-6 mt-4">
						<FormInput
							type="text"
							className="border px-5 py-3 rounded-xl border-[#00000066]"
							placeholder="Name"
						/>
						<FormInput
							type="email"
							className="border px-5 py-3 rounded-xl border-[#00000066]"
							placeholder="Email"
						/>
						<FormInput
							type="password"
							className="border px-5 py-3 rounded-xl border-[#00000066]"
							placeholder="Password"
						/>
						<AuthButton
							displayText="Create account"
							className="flex justify-center items-center font-medium text-base bg-black text-white px-16 w-[400px] h-[60px] rounded-xl"
						/>
					</form>
					<div className="flex items-center font-medium text-sm space-x-2 pt-3">
						<p className="opacity-40">Already have an account?</p>
						<Link to="/auth/login" className="underline">
							Login
						</Link>
					</div>
				</div>
				<div className="space-y-6">
					<AuthButton
						displayText="Sign up with Apple"
						className="flex justify-center items-center font-medium text-base bg-black text-white px-16 w-[400px] h-[60px] rounded-xl"
						children={
							<>
								<img src={appleIcon} alt={appleIcon} className="h-8 w-8 mx-1" />
							</>
						}
					/>
					<AuthButton
						displayText="Sign up with Google"
						className="flex justify-center items-center font-medium text-base text-black border-black border px-16 w-[400px] h-[60px] rounded-xl"
						children={
							<>
								<img
									src={googleIcon}
									alt={googleIcon}
									className="h-8 w-8 mx-1"
								/>
							</>
						}
					/>
				</div>
			</div>
		</div>
	);
};

export default CreateAccount;
