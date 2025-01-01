export interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
  availabilityStatus: string;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  minimumOrderQuantity: number;
  shippingInformation: string;
  returnPolicy: string;
  warrantyInformation: string;
  weight: number;
  sku: string;
  tags: string[];
  meta: {
    createdAt: string;
    updatedAt: string;
  };
  reviews: {
    rating: number;
    comment: string;
    date: string;
  }[];
}
