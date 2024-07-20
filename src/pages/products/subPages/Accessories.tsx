import { productsType } from '../../../types/products';
import data from '../products,.json';

const Accessories = () => {
	const product: productsType[] = data.products;
	console.log(product);

	return <div className='grid h-[740px] mx-8 pt-8 gap-5'>Coming Soon ...</div>;
};

export default Accessories;
