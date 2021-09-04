import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { ProductCategory, CategoryQuery } from './product-categories.interface';
import { WoocommerceHelperService } from '../helper.service';

@Injectable({
  providedIn: 'root',
})
export class WoocommerceCategoriesService {
  constructor(
    private httpClient: HttpClient,
    private wooHelper: WoocommerceHelperService
  ) {}

  /**
   * Create a Category
   * @param payload: Product
   */
  createCategory(category: ProductCategory): Observable<ProductCategory> {
    return this.httpClient
      .post<ProductCategory>(`products/categories`, category)
      .pipe(catchError((err) => this.wooHelper.handleError(err)));
  }

  /**
   * Retrieve a Category
   */
  retrieveCategory(id: number): Observable<ProductCategory> {
    return this.httpClient
      .get<ProductCategory>(`products/categories/${id}`)
      .pipe(catchError((err) => this.wooHelper.handleError(err)));
  }

  /**
   * Retrieve list of Category
   */
  retrieveCategories(query?: CategoryQuery): Observable<CategoryQuery[]> {
    return this.httpClient
      .get<CategoryQuery[]>(`products/categories`, {
        params: this.wooHelper.includeQuery(query),
      })
  }

  /**
   * Update Category
   */
  updateCategory(
    id: number,
    payload: ProductCategory
  ): Observable<ProductCategory> {
    return this.httpClient
      .put<ProductCategory>(`products/categories/${id}`, payload)
      .pipe(catchError((err) => this.wooHelper.handleError(err)));
  }

  /**
   * Delete Category
   */
  deleteCategory(id: number): Observable<ProductCategory> {
    return this.httpClient
      .delete<ProductCategory>(`products/categories/${id}`)
      .pipe(catchError((err) => this.wooHelper.handleError(err)));
  }
}
