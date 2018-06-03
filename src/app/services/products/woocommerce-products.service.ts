import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Product } from './product.interface';
import { ProductQuery } from './product-query.interface';
import { ProductReview } from './review.interface';
import { WoocommerceHelperService } from '../helper.service';

@Injectable({
  providedIn: 'root'
})
export class WoocommerceProductsService {

  constructor(
    private httpClient: HttpClient,
    private wooHelper: WoocommerceHelperService
  ) { }

  /**
   * Create a Product
   * @param payload: Product
   */
  createProduct(payload: Product): Observable<Product> {
    return this.httpClient.post(`products`, payload)
      .pipe(catchError(err => this.wooHelper.handleError(err)));
  }

  /**
   * Retrive a product
   */
  retriveProduct(id: number): Observable<Product> {
    return this.httpClient.get(`products/${id}`)
      .pipe(catchError(err => this.wooHelper.handleError(err)));
  }

  /**
   * Retrive list of product
   */
  retriveProducts(query: ProductQuery = {}): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`products`, {params: this.wooHelper.includeQuery(query)})
      .pipe(catchError(err => this.wooHelper.handleError(err)));
  }

  /**
   * Update Product
   */
  updateProduct(id: number, payload: Product): Observable<Product> {
    return this.httpClient.put(`products/${id}`, payload)
    .pipe(catchError(err => this.wooHelper.handleError(err)));
  }

  /**
   * Update Product
   */
  deleteProduct(id: number): Observable<Product> {
    return this.httpClient.delete(`products/${id}`)
    .pipe(catchError(err => this.wooHelper.handleError(err)));
  }

  /**
   * Retrive product review
   */
  retriveProductReview(product_id: string, reviews_id: string): Observable<ProductReview> {
    return this.httpClient.get<ProductReview>(`products/${product_id}/reviews/${reviews_id}`)
    .pipe(catchError(err => this.wooHelper.handleError(err)));
  }

  /**
   * Retrive product reviews by product id
   */
  retriveProductReviews(product_id: string): Observable<ProductReview[]> {
    return this.httpClient.get<ProductReview[]>(`products/${product_id}/reviews`)
    .pipe(catchError(err => this.wooHelper.handleError(err)));
  }

  private includeQuery(query) {
    const queryPatch = {};
    Object.keys(query).forEach(key => {
      queryPatch[key] = query[key].toString();
    });
    return queryPatch;
  }
}
