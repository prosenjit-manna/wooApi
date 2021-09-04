import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import {
  ProductTag,
  TagQuery
 } from './product-tags.interface';
import { WoocommerceHelperService } from '../helper.service';

@Injectable({
  providedIn: 'root'
})
export class WoocommerceTagsService {

  constructor(
    private httpClient: HttpClient,
    private wooHelper: WoocommerceHelperService
  ) { }

  createTag(payload: ProductTag): Observable<ProductTag> {
    return this.httpClient.post<ProductTag>(`tags`, payload)
      .pipe(catchError(err => this.wooHelper.handleError(err)));
  }

  retrieveTag(id: number): Observable<ProductTag> {
    return this.httpClient.get<ProductTag>(`tags/${id}`)
      .pipe(catchError(err => this.wooHelper.handleError(err)));
  }

  retrieveTags(query?: TagQuery): Observable<ProductTag[]> {
    return this.httpClient.get<ProductTag[]>(`tags`,
      {
        params: this.wooHelper.includeQuery(query)
      })
  }

  updateTag(id: number, payload: ProductTag): Observable<ProductTag> {
    return this.httpClient.put<ProductTag>(`tags/${id}`, payload)
    .pipe(catchError(err => this.wooHelper.handleError(err)));
  }

  deleteTagT(id: number): Observable<ProductTag> {
    return this.httpClient.delete<ProductTag>(`tags/${id}`)
    .pipe(catchError(err => this.wooHelper.handleError(err)));
  }
}
