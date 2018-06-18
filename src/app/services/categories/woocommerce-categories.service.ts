import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import {
  ProductCategory,
  CategoryQuery
 } from './product-categories.interface';
import { WoocommerceHelperService } from '../helper.service';

@Injectable()
export class WoocommerceCategoriesService {

  constructor(
    private httpClient: HttpClient,
    private wooHelper: WoocommerceHelperService
  ) { }

  /**
   * Create a Category
   * @param payload: Product
   */
  createCategory(category: ProductCategory): Observable<ProductCategory> {
    return this.httpClient.post<ProductCategory>(`categories`, category)
      .pipe(catchError(err => this.wooHelper.handleError(err)));
  }

  /**
   * Retrieve a Category
   */
  retrieveCategory(id: number): Observable<ProductCategory> {
    return this.httpClient.get<ProductCategory>(`categories/${id}`)
      .pipe(catchError(err => this.wooHelper.handleError(err)));
  }

  /**
   * Retrieve list of Category
   */
  retrieveCategories(query?: CategoryQuery): Observable<CategoryQuery[]> {
    return this.httpClient.get(`categories`,
      {
        params: this.wooHelper.includeQuery(query)
      })
      .pipe(
        catchError(err => this.wooHelper.handleError(err)));
  }

  /**
   * Update Category
   */
  updateCategory(id: number, payload: ProductCategory): Observable<ProductCategory> {
    return this.httpClient.put<ProductCategory>(`categories/${id}`, payload)
    .pipe(catchError(err => this.wooHelper.handleError(err)));
  }

  /**
   * Delete Category
   */
  deleteCategory(id: number): Observable<ProductCategory> {
    return this.httpClient.delete<ProductCategory>(`categories/${id}`)
    .pipe(catchError(err => this.wooHelper.handleError(err)));
  }
}
