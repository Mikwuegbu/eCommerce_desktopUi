export interface productsType {
	id: number;
	displayName: string;
	price: number;
	image: string;
	details: string;
	specs: {
		sku: number;
		category?: string;
		stock: string;
		farm: string;
		freshness: string;
		buy_by: string;
		delivery: string;
		delivery_area: string;
	};
	rating: {
		review_star: number;
		custom_Num: number;
	};
}
