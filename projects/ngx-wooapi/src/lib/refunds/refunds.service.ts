import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { WoocommerceHelperService } from '../helper.service';
import { Refund } from './refunds.interface';


@Injectable({
  providedIn: 'root'
})
export class WoocommerceRefundsService {

  constructor(
    private httpClient: HttpClient,
    private wooHelper: WoocommerceHelperService
  ) { }

  createRefund(orderId: number, payload: Refund): Observable<Refund> {
    return this.httpClient.post<Refund>(`orders/${orderId}/refunds`, payload)
      .pipe(catchError(err => this.wooHelper.handleError(err)));
  }

  retrieveRefund(orderId: number, refundId: number): Observable<Refund> {
    return this.httpClient.get<Refund>(`orders/${orderId}/refunds/${refundId}`)
      .pipe(catchError(err => this.wooHelper.handleError(err)));
  }

  retrieveRefunds(orderId: number): Observable<Refund[]> {
    return this.httpClient.get<Refund>(`orders/${orderId}/refunds`)
      .pipe(catchError(err => this.wooHelper.handleError(err)));
  }

  deleteRefund(orderId: number, refundId: number): Observable<Refund> {
    return this.httpClient.delete<Refund>(`orders/${orderId}/refunds/${refundId}/?force=true`)
      .pipe(catchError(err => this.wooHelper.handleError(err)));
  }

}
