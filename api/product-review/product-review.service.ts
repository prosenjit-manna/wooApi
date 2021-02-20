import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { WoocommerceHelperService } from '../helper.service';
import { ProductReview } from '../products/product.interface';

@Injectable({
  providedIn: 'root'
})
export class WoocommerceReviewService {

  constructor(
    private httpClient: HttpClient,
    private wooHelper: WoocommerceHelperService
  ) { }

  createAttribute(payload: ProductReview): Observable<ProductReview> {
    return this.httpClient.post<ProductReview>(`products/reviews`, payload)
      .pipe(catchError(err => this.wooHelper.handleError(err)));
  }

  retrieveAttribute(id: string): Observable<ProductReview> {
    return this.httpClient.get<ProductReview>(`products/reviews/${id}`)
      .pipe(catchError(err => this.wooHelper.handleError(err)));
  }

  listAllAttribute(): Observable<ProductReview[]>  {
    return this.httpClient.get<ProductReview[]>(`products/reviews`)
      .pipe(catchError(err => this.wooHelper.handleError(err)));
  }

  updateAttribute(payload: ProductReview): Observable<ProductReview>  {
    return this.httpClient.put<ProductReview>(`products/reviews/${payload.id}`, payload)
      .pipe(catchError(err => this.wooHelper.handleError(err)));
  }

  deleteAttribute(id: string): Observable<ProductReview>  {
    return this.httpClient.delete<ProductReview>(`products/reviews/${id}?force=true`)
      .pipe(catchError(err => this.wooHelper.handleError(err)));
  }
}
