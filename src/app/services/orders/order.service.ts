import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { WoocommerceHelperService } from '../helper.service';
import { Order } from './orders.interface';

@Injectable()
export class WoocommerceOrderService {

  constructor(
    private httpClient: HttpClient,
    private wooHelper: WoocommerceHelperService
  ) { }

  createOrder(order: Order): Observable<Order> {
    return this.httpClient.post<Order>(`orders`, order)
      .pipe(catchError(err => this.wooHelper.handleError(err)));
  }

  retriveOrder(id: string): Observable<Order> {
    return this.httpClient.get<Order>(`orders/${id}`)
      .pipe(catchError(err => this.wooHelper.handleError(err)));
  }

  listAllOrder(): Observable<Order[]>  {
    return this.httpClient.get<Order[]>(`orders`)
      .pipe(catchError(err => this.wooHelper.handleError(err)));
  }

  updateOrder(order: Order): Observable<Order>  {
    return this.httpClient.put<Order>(`orders/${order.id}`, order)
      .pipe(catchError(err => this.wooHelper.handleError(err)));
  }

  deleteOrder(id: string): Observable<Order>  {
    return this.httpClient.delete<Order>(`orders/${id}`)
      .pipe(catchError(err => this.wooHelper.handleError(err)));
  }
}
