import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import {
  Product, Review,
 } from '../interface/genarated/product.interface';
import { WoocommerceHelperService } from '../helper.service';
import { ProductsResponse } from '../interface/created/product.interface';

@Injectable({
  providedIn: 'root'
})
export class WoocommerceProductsService {

  constructor(
    private httpClient: HttpClient,
    private wooHelper: WoocommerceHelperService
  ) { }

  createProduct(payload: Product): Observable<ProductsResponse> {
    return this.httpClient.post<ProductsResponse>(`products`, payload)
      .pipe(catchError(err => this.wooHelper.handleError(err)));
  }

  getProduct(id: number): Observable<Product> {
    return this.httpClient.get<Product>(`products/${id}`)
      .pipe(catchError(err => this.wooHelper.handleError(err)));
  }

  getProducts(query?: any): Observable<ProductsResponse> {
    return this.httpClient.get(`products`, {params: this.wooHelper.includeQuery(query), observe: 'response'})
      .pipe(
        map(value => this.wooHelper.includeResponseHeader(value, 'products')),
        catchError(err => this.wooHelper.handleError(err)));
  }

  updateProduct(id: number, payload: Product): Observable<Product> {
    return this.httpClient.put<Product>(`products/${id}`, payload)
    .pipe(catchError(err => this.wooHelper.handleError(err)));
  }

  deleteProduct(id: number): Observable<Product> {
    return this.httpClient.delete<Product>(`products/${id}`)
    .pipe(catchError(err => this.wooHelper.handleError(err)));
  }

  retrieveProductReviews(productId: string): Observable<Review[]> {
    return this.httpClient.get<Review[]>(`products/${productId}/reviews`)
    .pipe(catchError(err => this.wooHelper.handleError(err)));
  }

  retrieveProductReview(productId: number, reviewId: number): Observable<Review> {
    return this.httpClient.get<Review>(`products/${productId}/reviews/${reviewId}`)
    .pipe(catchError(err => this.wooHelper.handleError(err)));
  }
}
