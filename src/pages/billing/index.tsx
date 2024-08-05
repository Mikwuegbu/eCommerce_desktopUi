import { ChangeEvent, useContext } from "react";
import { ProductContext, QuantityContext } from "../products/Provider";
import { CiGrid32, CiHeart, CiSearch, CiUser } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import { GiShoppingCart } from "react-icons/gi";
import { Link } from "react-router-dom";
import { RiCloseLargeFill } from "react-icons/ri";
import { renderRating } from "../products/subPages/SingleProduct";
import BillingForm from "../../components/BillingForm";

const Billing = () => {
	//const checkOutItems = useContext(ProductContext)?.cartItems;
	const cartItems = useContext(ProductContext)?.cartItems;
	const quantity = useContext(QuantityContext)?.quantity;
	const setQuantity = useContext(QuantityContext)?.setQuantity;
	const initialVal = 0;

	const handleQuantity = (e: ChangeEvent<HTMLSelectElement>) => {
		e.preventDefault;
		const selectedIndex = parseInt(e.target.value);
		setQuantity!(selectedIndex);
	};

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
								isActive ? "border-b-2 border-black" : ""
							}
						>
							Products
						</NavLink>
						<NavLink
							to='/'
							className={({ isActive }) =>
								isActive ? "border-b-2 border-black" : ""
							}
						>
							Story
						</NavLink>
						<NavLink
							to='/'
							className={({ isActive }) =>
								isActive ? "border-b-2 border-black" : ""
							}
						>
							Manufacturing
						</NavLink>
						<NavLink
							to='/'
							className={({ isActive }) =>
								isActive ? "border-b-2 border-black" : ""
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
				<BillingForm />
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
							return (
								<div
									key={product.id}
									className='flex space-x-4 py-8 place-items-center px-2'
								>
									<div className='flex flex-col space-y-3'>
										<img src={product.image} className='rounded-2xl mb-2' />
										<button className='flex place-items-center space-x-2'>
											<CiHeart /> <p>Wishlist</p>
										</button>
										<button className='flex place-items-center space-x-2'>
											<CiGrid32 /> <p>Compare</p>
										</button>
										<button className='flex place-items-center space-x-2'>
											<RiCloseLargeFill /> <p>Remove</p>
										</button>
									</div>
									<div className='space-y-4'>
										<h1 className='font-medium text-xl'>
											{product.displayName}
										</h1>
										<div className='space-y-4'>
											<p className='font-normal text-[#A9A9A9]'>Farm:</p>
											<p className='font-normal text-[#A9A9A9]'>Freshness</p>
											<div className='flex'>
												{renderRating(product.rating.review_star)}
											</div>
											<div className='flex space-x-16'>
												<div>
													<p className='font-semibold text-lg text-nowrap text-[#6A983C]'>
														{product.price} USD
													</p>
													<s className='text-nowrap text-[#A9A9A9] font-semibold'>
														48.56 USD
													</s>
												</div>
												<div className='flex space-x-2.5 max-w-min border-2 px-2 place-items-center py-1 rounded-2xl bg-gray-100'>
													<span className='border-r-2 pr-4'>{quantity}</span>
													<select
														onChange={handleQuantity}
														name='num_of_items'
														className='outline-none bg-gray-100 px-2'
													>
														<option defaultValue={1} value={1}>
															PCs
														</option>
														<option value='2'>2 Pcs</option>
														<option value='3'>3 Pcs</option>
														<option value='4'>4 Pcs</option>
													</select>
												</div>
											</div>
										</div>
									</div>
								</div>
							);
						})}
					</div>
					<div className='relative left-0 right-0 -bottom-20'>
						<div className='flex justify-between'>
							<div>
								<p>Subtotal:</p>
								<p>Tax:</p>
								<p>Shipping:</p>
							</div>
							<div>
								<p>
									{cartItems?.reduce(
										(sum, product) => sum + product.quantity * product.price,
										initialVal
									)}
								</p>
								<p>Hello</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Billing;
