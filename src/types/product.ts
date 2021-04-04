export interface Product {
      _id: string;
      name: string;
      image_url: string;
      price_per_kilo: number;
      farmer: string;
      description?: string;
      info?: {
            origin: string;
            certification: string;
            type: string;
      }
}

export type Products = Product[] | []