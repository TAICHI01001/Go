export interface Product {
  id: number;
  image: string;
  name: string;
  price: number;
  description: string;
}
export interface ProductDetails extends Product{
  weight:string;
  code:string;
}