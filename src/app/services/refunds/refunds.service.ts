import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Refunds } from './refunds.interface';
import { WoocommerceHelperService } from '../helper.service';

@Injectable()
export class WoocommerceRefundsService {

  constructor(
    private httpClient: HttpClient,
    private wooHelper: WoocommerceHelperService
  ) { }

  createRefund(orderid: string, payload: Refunds): Observable<Refunds> {
    return this.httpClient.post<Refunds>(`orders/${orderid}/refunds`, payload)
      .pipe(catchError(err => this.wooHelper.handleError(err)));
  }

  retriveRefund(orderid: string, refundId: string): Observable<Refunds> {
    return this.httpClient.get<Refunds>(`orders/${orderid}/refunds/${refundId}`)
      .pipe(catchError(err => this.wooHelper.handleError(err)));
  }

  retriveRefunds(orderid: string): Observable<Refunds> {
    return this.httpClient.get<Refunds>(`orders/${orderid}/refunds`)
      .pipe(catchError(err => this.wooHelper.handleError(err)));
  }

  deleteRefund(orderid: string, refundId: string): Observable<Refunds> {
    return this.httpClient.delete<Refunds>(`orders/${orderid}/refunds/${refundId}/?force=true`)
      .pipe(catchError(err => this.wooHelper.handleError(err)));
  }

}
