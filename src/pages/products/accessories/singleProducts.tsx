import { useParams } from "react-router-dom";
import { FaPlus, FaRegStar, FaStar } from "react-icons/fa";
import products from "../../../utils/products.json";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, updateItemQuantity } from "../../../store/cartSlice";
import { storeType } from "../../../store/store";

// --rendering the Stars
export const renderRating = (rating: number): JSX.Element[] => {
	const filledStars = Array.from(Array(rating), (_, index) => (
		<FaStar key={`filled-${index}`} fill='#FDBC15' size={20} />
	));
	const unfilledStars = Array.from(Array(5 - rating), (_, index) => (
		<FaRegStar key={`unfilled-${index}`} fill='#D1D1D1' size={20} />
	));
	return [...filledStars, ...unfilledStars];
};

const SingleProduct = () => {
	const { productId } = useParams();
	const productItems = products.products;
	const product = productItems.find((item) => item.id.toString() === productId);
	const cart = useSelector((state: storeType) => state.cart.items);
	const cartItem = cart.find((item) => item.id === product?.id);
	const dispatch = useDispatch();

	// -- Handle the quantity Selection
	const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const selectedQuantity: number = parseInt(event.target.value);
		dispatch(
			updateItemQuantity({
				productId: cartItem!.id,
				quantity: selectedQuantity,
			})
		);
	};

	return (
		<div className='grid h-[740px] mx-8 pt-16 justify-center'>
			{product && (
				<div
					key={product.id}
					className='flex flex-col md:flex-row md:space-x-16 max-w-max'
				>
					<div className='overflow-hidden min-w-max'>
						<img
							src={product.image}
							alt={product.displayName}
							className='md:w-[380px] md:h-[340px] w-[340px] h-[300px] object-cover scale-100 rounded-2xl'
						/>
					</div>
					<div className='min-w-min mb-4'>
						<div className=' flex flex-col justify-center'>
							<h2 className='font-poppins font-semibold md:text-3xl text-2xl'>
								{product.name}
							</h2>

							<div className='flex space-x-[2px] py-4 place-items-center flex-nowrap'>
								{renderRating(product.rating.review_star)}
								<span className='px-2 font-sans font-normal text-sm text-[#A9A9A9] text-nowrap'>
									({product.rating.custom_Num} customer review)
								</span>
							</div>
							<p className='text-base font-normal py-6'>{product.details}</p>
							<div className='grid md:grid-cols-2 gap-4'>
								{product.specs.map((spec) => {
									return (
										<div key={spec.key} className=''>
											<p className='text-[14px] text-[#A9A9A9]'>{spec.key}</p>
										</div>
									);
								})}
							</div>
							<div className='py-10'>
								<div className='flex justify-between bg-gray-50 py-3.5 md:px-4 px-6 place-items-center rounded-2xl'>
									<p className='font-semibold md:text-3xl text-xl text-[#6A983C]'>
										{product.price.toFixed(2)}&nbsp;USD
									</p>
									{/* -- DropDown and Button */}
									<div className='flex flex-row place-items-center space-x-8'>
										<div className='md:flex hidden md:space-x-2.5 max-w-min border-2 md:px-4 px-2 py-3 rounded-2xl bg-gray-100'>
											<span className='border-r-2 pr-4'>
												{cartItem?.quantity}
											</span>
											<select
												onChange={handleSelectChange}
												name='num_of_items'
												className='outline-none bg-gray-100 md:px-2'
												disabled={cart.length < 1}
											>
												<option defaultValue={1} value={1}>
													PCs
												</option>
												<option value='2'>2 Pcs</option>
												<option value='3'>3 Pcs</option>
												<option value='4'>4 Pcs</option>
											</select>
										</div>
										<button
											onClick={() => dispatch(addItemToCart(product))}
											className='hidden active:bg-[#000000c2] md:flex place-items-center space-x-1.5 bg-black text-white py-3 px-4 rounded-2xl'
										>
											<FaPlus /> <span>Add to cart</span>
										</button>
										<button
											onClick={() => dispatch(addItemToCart(product))}
											className='md:hidden active:bg-[#000000c2] flex place-items-center space-x-1.5 bg-black text-white py-3 px-6 rounded-2xl'
										>
											<FaPlus /> <span>Add</span>
										</button>
									</div>
								</div>

								<div className='pt-8 pb-6 flex font-semibold md:text-xl space-x-8'>
									<button className='w-full text-justify hover:border-b-[2.5px] pb-4 border-[#6A983C]'>
										Description
									</button>
									<button className='w-full text-justify hover:border-b-[2.5px] pb-4 border-[#6A983C]'>
										Review
									</button>
									<button className='w-full text-justify hover:border-b-[2.5px] pb-4 border-[#6A983C]'>
										Question
									</button>
								</div>
								<div className='space-y-2'>
									<h1 className='font-medium text-lg'>Origins</h1>
									<p className='py-4'>
										We work hard to ensure that the fruit and vegetables we sell
										are fresh and high in quality. If we don't grow them
										ourselves, we source them from carefully chosen suppliers,
										preferring to buy locally whenever possible.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default SingleProduct;
