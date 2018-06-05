import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import {
  Product,
  ProductQuery,
  ProductReview,
  RetriveProductResponse,
  RetriveProductsResponse
 } from './product.interface';
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
  createProduct(payload: Product): Observable<RetriveProductResponse> {
    return this.httpClient.post<RetriveProductResponse>(`products`, payload)
      .pipe(catchError(err => this.wooHelper.handleError(err)));
  }

  /**
   * Retrive a product
   */
  retriveProduct(id: number): Observable<RetriveProductResponse> {
    return this.httpClient.get<RetriveProductResponse>(`products/${id}`)
      .pipe(catchError(err => this.wooHelper.handleError(err)));
  }

  /**
   * Retrive list of product
   */
  retriveProducts(query: ProductQuery = {}): Observable<RetriveProductsResponse> {
    return this.httpClient.get(`products`, {params: this.wooHelper.includeQuery(query), observe: 'response'})
      .pipe(
        map(value => this.wooHelper.includeResponseHeader(value)),
        catchError(err => this.wooHelper.handleError(err)));
  }

  /**
   * Update Product
   */
  updateProduct(id: number, payload: Product): Observable<RetriveProductResponse> {
    return this.httpClient.put<RetriveProductResponse>(`products/${id}`, payload)
    .pipe(catchError(err => this.wooHelper.handleError(err)));
  }

  /**
   * Update Product
   */
  deleteProduct(id: number): Observable<RetriveProductResponse> {
    return this.httpClient.delete<RetriveProductResponse>(`products/${id}`)
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
}
