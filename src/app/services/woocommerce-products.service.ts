import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Product } from './product.interface';
import { ProductQuery } from './product-query.interface';

@Injectable({
  providedIn: 'root'
})
export class WoocommerceProductsService {

  constructor(
    private httpClient: HttpClient
  ) { }

  /**
   * Create a Product
   * @param payload: Product
   */
  createProduct(payload: Product): Observable<Product> {
    return this.httpClient.post(`productsa`, payload)
      .pipe(catchError(err => this.handleError(err)));
  }

  /**
   * Retrive a product
   */
  retriveProduct(id: string) {
    return this.httpClient.get(`products/${id}`)
      .pipe(catchError(err => this.handleError(err)));
  }

  /**
   * Retrive list of product
   */
  retriveProducts(query: ProductQuery = {}) {
    return this.httpClient.get(`products`, {params: this.includeQuery(query)})
      .pipe(catchError(err => this.handleError(err)));
  }

  /**
   * Update Product
   */
  updateProduct(id: string, payload: Product) {
    return this.httpClient.put(`products/${id}`, payload)
    .pipe(catchError(err => this.handleError(err)));
  }

  /**
   * Update Product
   */
  deleteProduct(id: string, payload: Product) {
    return this.httpClient.delete(`products/${id}`)
    .pipe(catchError(err => this.handleError(err)));
  }

  /**
   * Retrive product review
   */
  retriveProductReview(product_id: string, reviews_id: string) {
    return this.httpClient.get(`products/${product_id}/reviews/${reviews_id}`)
    .pipe(catchError(err => this.handleError(err)));
  }

  /**
   * Retrive product review by product id
   */
  retriveProductReviews(product_id: string) {
    return this.httpClient.get(`products/${product_id}/reviews`)
    .pipe(catchError(err => this.handleError(err)));
  }

  private includeQuery(query) {
    const queryPatch = {};
    Object.keys(query).forEach(key => {
      queryPatch[key] = query[key].toString();
    });
    return queryPatch;
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
        console.log(error);
        return throwError(error.error);
    }
    // return an observable with a user-facing error message
    return throwError({message: 'Something bad happened; please try again later.'});
  }

}
