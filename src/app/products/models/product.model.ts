export interface Product {
  title: string;
  image: string;
  rate: number;
  count: number;
  description: string;
  price: number;
  rating: Rating;
  category: string;
  id: string;
  quantity: number;
}
export interface Rating {
  count: number;
  rate: number;
}
