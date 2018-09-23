import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { WoocommerceHelperService } from '../helper.service';
import { Coupon } from './coupon.interface';

@Injectable()
export class WoocommerceCouponService {

  constructor(
    private httpClient: HttpClient,
    private wooHelper: WoocommerceHelperService
  ) { }

  
  createCoupon(coupon: Coupon): Observable<Coupon> {
    return this.httpClient.post<Coupon>(`coupons`, coupon)
      .pipe(catchError(err => this.wooHelper.handleError(err)));
  }

  retriveCoupon(id: number): Observable<Coupon> {
    return this.httpClient.get<Coupon>(`coupons/${id}`)
      .pipe(catchError(err => this.wooHelper.handleError(err)));
  }

  retriveCoupons(): Observable<Coupon> {
    return this.httpClient.get<Coupon>(`coupons`)
      .pipe(catchError(err => this.wooHelper.handleError(err)));
  }

  updateCoupon(coupon: Coupon, id: number): Observable<Coupon> {
    return this.httpClient.post<Coupon>(`coupons/${id}`, coupon)
      .pipe(catchError(err => this.wooHelper.handleError(err)));
  }

  deleteCoupon(id: number): Observable<Coupon> {
    return this.httpClient.delete<Coupon>(`coupons/${id}?force=true`)
      .pipe(catchError(err => this.wooHelper.handleError(err)));
  }

}
