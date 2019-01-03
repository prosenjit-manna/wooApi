import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { WoocommerceHelperService } from '../helper.service';
import { ProductReview } from '../products/product.interface';

@Injectable()
export class WoocommerceReviewService {

  constructor(
    private httpClient: HttpClient,
    private wooHelper: WoocommerceHelperService
  ) { }

  createAtribute(payload: ProductReview): Observable<ProductReview> {
    return this.httpClient.post<ProductReview>(`products/reviews`, payload)
      .pipe(catchError(err => this.wooHelper.handleError(err)));
  }

  retriveAtribute(id: string): Observable<ProductReview> {
    return this.httpClient.get<ProductReview>(`products/reviews/${id}`)
      .pipe(catchError(err => this.wooHelper.handleError(err)));
  }

  listAllAtribute(): Observable<ProductReview[]>  {
    return this.httpClient.get<ProductReview[]>(`products/reviews`)
      .pipe(catchError(err => this.wooHelper.handleError(err)));
  }

  updateAtribute(payload: ProductReview): Observable<ProductReview>  {
    return this.httpClient.put<ProductReview>(`products/reviews/${payload.id}`, payload)
      .pipe(catchError(err => this.wooHelper.handleError(err)));
  }

  deleteAtribute(id: string): Observable<ProductReview>  {
    return this.httpClient.delete<ProductReview>(`products/reviews/${id}?force=true`)
      .pipe(catchError(err => this.wooHelper.handleError(err)));
  }
}
