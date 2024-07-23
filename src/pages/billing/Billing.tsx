import { useContext } from 'react';
import { ProductContext } from '../products/Provider';
import { CiSearch, CiUser } from 'react-icons/ci';
import { NavLink } from 'react-router-dom';
import { GiShoppingCart } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import FormInput from '../../components/FormInput';

const Billing = () => {
	//const checkOutItems = useContext(ProductContext)?.cartItems;
	const cartItems = useContext(ProductContext)?.cartItems;

	return (
		<div className='px-14 pb-14'>
			<nav className='grid grid-flow-col justify-between place-items-center py-8'>
				<div className='relative'>
					<CiSearch size={23} className='absolute top-2 left-0 right-0' />
					<input
						type='text'
						className='py-1.5 pl-7 outline-none focus:border-b-2'
						placeholder='search store'
					/>
				</div>
				<div className='flex justify-center place-items-center space-x-3'>
					<div className='flex space-x-10 font-poppins font-medium text-base'>
						<NavLink
							to='/products'
							className={({ isActive }) =>
								isActive ? 'border-b-2 border-black' : ''
							}
						>
							Products
						</NavLink>
						<NavLink
							to='/'
							className={({ isActive }) =>
								isActive ? 'border-b-2 border-black' : ''
							}
						>
							Story
						</NavLink>
						<NavLink
							to='/'
							className={({ isActive }) =>
								isActive ? 'border-b-2 border-black' : ''
							}
						>
							Manufacturing
						</NavLink>
						<NavLink
							to='/'
							className={({ isActive }) =>
								isActive ? 'border-b-2 border-black' : ''
							}
						>
							packaging
						</NavLink>
					</div>
					<div className='flex space-x-4 place-items-center'>
						<Link to='/billing' className='flex space-x-1 place-items-center'>
							<GiShoppingCart /> <p className='text-xs'>{cartItems?.length}</p>
						</Link>
						<Link to='/login'>
							<CiUser />
						</Link>
					</div>
				</div>
			</nav>
			<div className='flex justify-between space-x-8 px-28'>
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
				<div className=' max-w-[468px] border rounded-2xl px-4 py-4'>
					<div className='space-y-2'>
						<h1 className='font-semibold text-2xl text-nowrap'>
							Order summary
						</h1>
						<p className='text-xs text-nowrap text-[#A9A9A9]'>
							Price can change depending on shipping method and taxes of your
							state.
						</p>
					</div>
					<div>
						{cartItems?.map((product) => {
							return <div>{product.displayName}</div>;
						})}
					</div>
					<div></div>
				</div>
			</div>
		</div>
	);
};

export default Billing;