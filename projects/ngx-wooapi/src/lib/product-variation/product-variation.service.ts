// v3 supported

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { WoocommerceHelperService } from '../helper.service';
import { ProductVariation } from './product-variation.interface';

@Injectable({
  providedIn: 'root'
})
export class WoocommerceProductVariationService {

  constructor(
    private httpClient: HttpClient,
    private wooHelper: WoocommerceHelperService
  ) { }

  createVariation(payload: ProductVariation, productId: string): Observable<ProductVariation> {
    return this.httpClient.post<ProductVariation>(`products/${productId}/variations`, payload)
      .pipe(catchError(err => this.wooHelper.handleError(err)));
  }

  retrieveVariation(productId: string, id: string): Observable<ProductVariation> {
    return this.httpClient.get<ProductVariation>(`products/${productId}/variations/${id}`)
      .pipe(catchError(err => this.wooHelper.handleError(err)));
  }

  listAllVariation(productId: string): Observable<ProductVariation[]>  {
    return this.httpClient.get<ProductVariation[]>(`products/${productId}/variations`)
      .pipe(catchError(err => this.wooHelper.handleError(err)));
  }

  updateVariation(productId: string, id: string, payload: ProductVariation): Observable<ProductVariation>  {
    return this.httpClient
      .put<ProductVariation>(`products/${productId}/variations/${id}`, payload)
      .pipe(catchError(err => this.wooHelper.handleError(err)));
  }

  deleteVariation(productId: string, id: string): Observable<ProductVariation>  {
    return this.httpClient.delete<ProductVariation>(`products/${productId}/variations/${id}?force=true`)
      .pipe(catchError(err => this.wooHelper.handleError(err)));
  }
}
