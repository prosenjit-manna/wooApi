import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { WoocommerceHelperService } from '../helper.service';
import { ProductAttribute } from './product-attributes.interface';

@Injectable()
export class WoocommerceAttributeService {

  constructor(
    private httpClient: HttpClient,
    private wooHelper: WoocommerceHelperService
  ) { }

  createAttribute(payload: ProductAttribute): Observable<ProductAttribute> {
    return this.httpClient.post<ProductAttribute>(`products/attributes`, payload)
      .pipe(catchError(err => this.wooHelper.handleError(err)));
  }

  retrieveAttribute(id: string): Observable<ProductAttribute> {
    return this.httpClient.get<ProductAttribute>(`products/attributes/${id}`)
      .pipe(catchError(err => this.wooHelper.handleError(err)));
  }

  listAllAttribute(): Observable<ProductAttribute[]>  {
    return this.httpClient.get<ProductAttribute[]>(`products/attributes`)
      .pipe(catchError(err => this.wooHelper.handleError(err)));
  }

  updateAttribute(payload: ProductAttribute): Observable<ProductAttribute>  {
    return this.httpClient.put<ProductAttribute>(`products/attributes/${payload.id}`, payload)
      .pipe(catchError(err => this.wooHelper.handleError(err)));
  }

  deleteAttribute(id: string): Observable<ProductAttribute>  {
    return this.httpClient.delete<ProductAttribute>(`products/attributes/${id}?force=true`)
      .pipe(catchError(err => this.wooHelper.handleError(err)));
  }
}
