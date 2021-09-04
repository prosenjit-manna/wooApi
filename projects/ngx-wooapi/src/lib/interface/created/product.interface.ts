import { Product } from "../genarated/product.interface";
import { wooApiResponse } from "../response-interface";

export interface ProductsResponse extends wooApiResponse {
  products: Product[]
}
