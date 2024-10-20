import { Link } from "react-router-dom";
import products from "../../../utils/products.json";

const Accessories = () => {
  const productItems = products.products;

  return (
    <div className="grid md:grid-flow-col md:grid-rows-2 h-[760px] md:mx-4 pt-8 gap-x-4 gap-y-11 mb-8">
      {productItems.map((product) => (
        <Link to={`${product.id}`} key={product.id} className="relative">
          <div className="w-full h-80 overflow-hidden">
            <img
              src={product.image}
              alt={product.displayName}
              className="w-full h-full object-cover scale-100 rounded-t-2xl"
            />
          </div>
          <div className="absolute bottom-5 left-0 right-0 flex justify-center text-center">
            <p className="text-[#01BEBC] bg-white font-semibold py-1.5 px-4 rounded-t-xl max-w-max">
              ${product.price.toFixed(2)}
            </p>
          </div>
          <div className="font-normal py-1.5">{product.displayName}</div>
        </Link>
      ))}
    </div>
  );
};

export default Accessories;
