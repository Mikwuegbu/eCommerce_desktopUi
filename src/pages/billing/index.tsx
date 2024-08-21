import { CiGrid32, CiHeart } from "react-icons/ci";

import { RiCloseLargeFill } from "react-icons/ri";
import { renderRating } from "../products/accessories/singleProducts";
import BillingForm from "../../components/BillingForm";
import { useDispatch, useSelector } from "react-redux";
import { updateItemQuantity } from "../../store/cartSlice";
import { storeType } from "../../store/store";
import { productsType } from "../../types/products";

const Billing = () => {
	const cartItems = useSelector((state: storeType) => state.cart.items);
	const dispatch = useDispatch();

	// -- Handle the quantity Selection
	const handleSelectChange = (
		event: React.ChangeEvent<HTMLSelectElement>,
		productId: number
	) => {
		const selectedCartItem = cartItems.find((item: productsType) => item.id === productId);
		const selectedQuantity: number = parseInt(event.target.value);
		dispatch(
			updateItemQuantity({
				productId: selectedCartItem!.id,
				quantity: selectedQuantity,
			})
		);
	};

	// -- Calculate the total price of the cart items
	const sumCartItems = (): number => {
		return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
	};

	return (
		<div className='lg:px-14 px-6 py-16'>
			<div className='flex flex-col lg:flex-row justify-between lg:space-x-8 lg:px-28'>
				<div className='w-full order-2 lg:order-1'>
					<BillingForm />
				</div>
				<div className='order-1 lg:order-2 lg:min-w-[486px] border rounded-2xl px-4 py-4 lg:h-screen lg:overflow-y-scroll no-scrollbar'>
					<div className='space-y-2'>
						<h1 className='font-semibold text-2xl text-nowrap'>
							Order summary
						</h1>
						<p className='text-xs lg:text-nowrap text-[#A9A9A9]'>
							Price can change depending on shipping method and taxes of your
							state.
						</p>
					</div>
					<div className=''>
						{cartItems.map((product) => {
							return (
								<div
									key={product.id}
									className='lg:flex space-x-4 py-8 place-items-center px-2'
								>
									<div className='flex flex-col space-y-3 py-6'>
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
									<div className='lg:space-y-4'>
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
													<span className='border-r-2 pr-4'>
														{product.quantity}
													</span>
													<select
														onChange={(e) => handleSelectChange(e, product.id)}
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
					<div className=' lg:relative static left-0 right-0'>
						<div className='flex justify-between pt-24 lg:pt-0'>
							<div>
								<p>Subtotal:</p>
								<p>Tax:</p>
								<p>Shipping:</p>
							</div>
							<div>
								<p>${sumCartItems()}</p>
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
