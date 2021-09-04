import { Product } from "../genarated/product.interface";
import { wooApiResponse } from "../interface";

export interface ProductResponse extends wooApiResponse {
  products: Product[]
}