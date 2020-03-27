import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { WoocommerceHelperService } from '../helper.service';
import { Refund } from './refunds.interface';


@Injectable()
export class WoocommerceRefundsService {

  constructor(
    private httpClient: HttpClient,
    private wooHelper: WoocommerceHelperService
  ) { }

  createRefund(orderid: number, payload: Refund): Observable<Refund> {
    return this.httpClient.post<Refund>(`orders/${orderid}/refunds`, payload)
      .pipe(catchError(err => this.wooHelper.handleError(err)));
  }

  retriveRefund(orderid: number, refundId: number): Observable<Refund> {
    return this.httpClient.get<Refund>(`orders/${orderid}/refunds/${refundId}`)
      .pipe(catchError(err => this.wooHelper.handleError(err)));
  }

  retriveRefunds(orderid: number): Observable<Refund[]> {
    return this.httpClient.get<Refund>(`orders/${orderid}/refunds`)
      .pipe(catchError(err => this.wooHelper.handleError(err)));
  }

  deleteRefund(orderid: number, refundId: number): Observable<Refund> {
    return this.httpClient.delete<Refund>(`orders/${orderid}/refunds/${refundId}/?force=true`)
      .pipe(catchError(err => this.wooHelper.handleError(err)));
  }

}
