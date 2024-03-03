export type Product = { 
	title: string, 
	price: number, 
	quantity: number, 
	id: number
};

// export type CartProduct = Product & { total };

export type FetchOption = { id: Product["id"] } | null;

export type CartContextType = {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productID: number) => void;
};