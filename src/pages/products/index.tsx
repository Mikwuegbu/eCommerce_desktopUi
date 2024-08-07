import { useContext } from "react";
import Explore from "./explore";
import { ExploreContext } from "./Provider";
import Accessories from "./accessories";

const Product = () => {
	const products = useContext(ExploreContext);

	switch (products?.location) {
		case "explore":
			return <Explore />;
		case "Accessories":
			return <Accessories />;
		default:
			return <Explore />;
	}
};

export default Product;
