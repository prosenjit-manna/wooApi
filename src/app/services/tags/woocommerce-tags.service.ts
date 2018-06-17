import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import {
  ProductTag,
  TagQuery
 } from './product-tags.interface';
import { WoocommerceHelperService } from '../helper.service';

@Injectable()
export class WoocommerceTagsService {

  constructor(
    private httpClient: HttpClient,
    private wooHelper: WoocommerceHelperService
  ) { }

  /**
   * Create a Tag
   * @param payload
   */
  createTag(payload: ProductTag): Observable<ProductTag> {
    return this.httpClient.post<ProductTag>(`tags`, payload)
      .pipe(catchError(err => this.wooHelper.handleError(err)));
  }

  /**
   * Retrieve a tag
   */
  retrieveTag(id: number): Observable<ProductTag> {
    return this.httpClient.get<ProductTag>(`tags/${id}`)
      .pipe(catchError(err => this.wooHelper.handleError(err)));
  }

  /**
   * Retrieve list of Tag
   */
  retrieveTags(query?: TagQuery): Observable<ProductTag[]> {
    return this.httpClient.get(`tags`,
      {
        params: this.wooHelper.includeQuery(query)
      })
      .pipe(
        catchError(err => this.wooHelper.handleError(err)));
  }

  /**
   * Update Tag
   */
  updateTag(id: number, payload: ProductTag): Observable<ProductTag> {
    return this.httpClient.put<ProductTag>(`tags/${id}`, payload)
    .pipe(catchError(err => this.wooHelper.handleError(err)));
  }

  /**
   * Delete Tag
   */
  deleteagT(id: number): Observable<ProductTag> {
    return this.httpClient.delete<ProductTag>(`tags/${id}`)
    .pipe(catchError(err => this.wooHelper.handleError(err)));
  }
}
