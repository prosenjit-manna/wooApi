import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import {
  Product,
  ProductQuery,
  RetrieveProductsResponse,
  ProductReviewsResponse,
  ProductReview,
  // ProductCountQuery
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
  createProduct(payload: Product): Observable<Product> {
    return this.httpClient.post<Product>(`products`, payload)
      .pipe(catchError(err => this.wooHelper.handleError(err)));
  }

  /**
   * Retrieve a product
   */
  retrieveProduct(id: number): Observable<Product> {
    return this.httpClient.get<Product>(`products/${id}`)
      .pipe(catchError(err => this.wooHelper.handleError(err)));
  }

  /**
   * Retrieve list of product
   */
  retrieveProducts(query?: ProductQuery): Observable<RetrieveProductsResponse> {
    return this.httpClient.get(`products`, {params: this.wooHelper.includeQuery(query), observe: 'response'})
      .pipe(
        map(value => this.wooHelper.includeResponseHeader(value, 'products')),
        catchError(err => this.wooHelper.handleError(err)));
  }

  /**
   * Update Product
   */
  updateProduct(id: number, payload: Product): Observable<Product> {
    return this.httpClient.put<Product>(`products/${id}`, payload)
    .pipe(catchError(err => this.wooHelper.handleError(err)));
  }

  /**
   * Update Product
   */
  deleteProduct(id: number): Observable<Product> {
    return this.httpClient.delete<Product>(`products/${id}`)
    .pipe(catchError(err => this.wooHelper.handleError(err)));
  }

  /**
   * Retrieve product reviews by product id
   */
  retrieveProductReviews(productId: string): Observable<ProductReviewsResponse> {
    return this.httpClient.get<ProductReviewsResponse>(`products/${productId}/reviews`)
    .pipe(catchError(err => this.wooHelper.handleError(err)));
  }

  /**
   * Retrieve product reviews by product id
   */
  retrieveProductReview(productId: number, reviewId: number): Observable<ProductReview> {
    return this.httpClient.get<ProductReview>(`products/${productId}/reviews/${reviewId}`)
    .pipe(catchError(err => this.wooHelper.handleError(err)));
  }
}
