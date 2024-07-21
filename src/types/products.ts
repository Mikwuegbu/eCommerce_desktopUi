type SpecType = {
	key: string;
	value: string | number;
};

export interface productsType {
	id: number;
	name: string;
	displayName: string;
	price: number;
	image: string;
	details: string;
	specs: SpecType[];
	rating: {
		review_star: number;
		custom_Num: number;
	};
}
