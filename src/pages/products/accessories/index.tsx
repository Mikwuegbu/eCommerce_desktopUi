import { Link } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../Provider";

const Accessories = () => {
	const products = useContext(ProductContext);
	const product = products?.products;

	return (
		<div className='grid grid-flow-col grid-rows-2 h-[760px] mx-8 pt-8 gap-x-6 gap-y-11 mb-8'>
			{product!.map((product) => (
				<Link to={`${product.id}`} key={product.id} className='relative'>
					<div className='w-full h-80 overflow-hidden'>
						<img
							src={product.image}
							alt={product.displayName}
							className='w-full h-full object-cover scale-100 rounded-t-2xl'
						/>
					</div>
					<div className='absolute bottom-5 left-0 right-0 flex justify-center text-center'>
						<p className='text-[#01BEBC] bg-white font-semibold py-1.5 px-4 rounded-t-xl max-w-max'>
							${product.price.toFixed(2)}
						</p>
					</div>
					<div className='font-normal py-1.5'>{product.displayName}</div>
				</Link>
			))}
		</div>
	);
};

export default Accessories;
