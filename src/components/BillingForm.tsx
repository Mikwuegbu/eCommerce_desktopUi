import FormInput from "./FormInput";

const BillingForm = () => {
	return (
		<div>
			<div className='w-full space-y-16'>
				<form className='space-y-8'>
					<div className='space-y-2'>
						<h1 className='font-semibold text-2xl'>Billing info</h1>
						<div className='flex justify-between font-normal text-sm text-[#A9A9A9]'>
							<p>Please enter your billing info</p>
							<p>Step 1 of 5</p>
						</div>
					</div>
					{/* Form Columns */}
					<div className='flex justify-between space-x-8'>
						<div className='w-full space-y-8'>
							<div className='flex flex-col'>
								<label htmlFor='firstName'>First name</label>
								<FormInput
									className='border rounded-xl border-[#D1D1D1] py-2 px-4'
									id='firstName'
									type='text'
									placeholder='First name'
								/>
							</div>
							<div className='flex flex-col'>
								<label htmlFor='email'>Email address</label>
								<FormInput
									className='border rounded-xl border-[#D1D1D1] py-2 px-4'
									id='email'
									type='email'
									placeholder='Email address'
								/>
							</div>
							<div className='flex flex-col'>
								<label htmlFor='address'>Address</label>
								<FormInput
									className='border rounded-xl border-[#D1D1D1] py-2 px-4'
									id='address'
									type='text'
									placeholder='Address'
								/>
							</div>
							<div className='flex flex-col'>
								<label htmlFor='state'>State/Country</label>
								<FormInput
									className='border rounded-xl border-[#D1D1D1] py-2 px-4'
									id='state'
									type='text'
									placeholder='Choose a state or Country'
								/>
							</div>
							<div className='space-x-2 border border-[#D1D1D1] text-nowrap rounded-xl px-4 py-2 flex place-items-center'>
								<input
									className='w-4 h-4'
									type='checkbox'
									name='yes'
									id='ship_to_different'
								/>
								<label htmlFor='ship_to_different'>
									Ship to a different address?
								</label>
							</div>
						</div>
						<div className='w-full space-y-8'>
							<div className='flex flex-col'>
								<label htmlFor='lastname'>Last name</label>
								<FormInput
									className='border rounded-xl border-[#D1D1D1] py-2 px-4'
									id='lastname'
									type='text'
									placeholder='Last name'
								/>
							</div>
							<div className='flex flex-col'>
								<label htmlFor='firstName'>Phone number</label>
								<FormInput
									className='border rounded-xl border-[#D1D1D1] py-2 px-4'
									id='firstName'
									type='tel'
									placeholder='Phone number'
								/>
							</div>
							<div className='flex flex-col'>
								<label htmlFor='town'>Town/City</label>
								<FormInput
									className='border rounded-xl border-[#D1D1D1] py-2 px-4'
									id='town'
									type='text'
									placeholder='Town or city'
								/>
							</div>
							<div className='flex flex-col'>
								<label htmlFor='zip'>Zip/Postal code</label>
								<FormInput
									className='border rounded-xl border-[#D1D1D1] py-2 px-4'
									id='zip'
									type='text'
									placeholder='Postal code or Zip'
								/>
							</div>
						</div>
					</div>
				</form>
				<div className='space-y-8'>
					<div className='space-y-2'>
						<h1 className='font-semibold text-2xl'>Billing method</h1>
						<div className='flex justify-between font-normal text-sm text-[#A9A9A9]'>
							<p>Please enter your payment method</p>
							<p>Step 2 of 5</p>
						</div>
					</div>
					<div className='space-y-4 font-semibold text-sm text-center'>
						<div className='space-x-2 border border-[#D1D1D1] rounded-xl px-4 py-2.5 flex place-items-center'>
							<input
								className='w-5 h-5'
								type='radio'
								name='yes'
								id='ship_to_different'
							/>
							<label
								htmlFor='ship_to_different'
								className='flex space-x-24 place-items-center text-nowrap'
							>
								<p>FedEx</p>
								<p className='text-lime-600'>
									+32 USD
									<span className='text-black px-2'>Additional price</span>
								</p>
								<p>image</p>
							</label>
						</div>
						<div className='space-x-2 border border-[#D1D1D1] rounded-xl px-4 py-2.5 flex place-items-center'>
							<input
								className='w-5 h-5'
								type='radio'
								name='yes'
								id='ship_to_different'
							/>
							<label
								htmlFor='ship_to_different'
								className='flex space-x-24 place-items-center text-nowrap'
							>
								<p>DHL</p>
								<p className='text-lime-600'>
									+15 USD
									<span className='px-2 text-black'>Additional price</span>
								</p>
								<p>image</p>
							</label>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BillingForm;
