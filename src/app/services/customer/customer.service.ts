import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { WoocommerceHelperService } from '../helper.service';
import { Customer } from './customer.interface';

@Injectable()
export class WoocommerceCustomerService {

  constructor(
    private httpClient: HttpClient,
    private wooHelper: WoocommerceHelperService
  ) { }

  /**
   * Create a customer
   * @param customer: Customer
   */
  createCustomers(customer: Customer): Observable<Customer> {
    return this.httpClient.post<Customer>(`customers`, customer)
      .pipe(catchError(err => this.wooHelper.handleError(err)));
  }

  /**
   * Retrive a customer
   * @param customer: Customer
   */
  retriveCustomers(id: number): Observable<Customer> {
    return this.httpClient.get<Customer>(`customers/${id}`)
      .pipe(catchError(err => this.wooHelper.handleError(err)));
  }

  /**
   * Update a customer
   * @param customer: Customer
   */
  updateCustomers(id: number, customer: Customer): Observable<Customer> {
    return this.httpClient.put<Customer>(`customers/${id}`, customer)
      .pipe(catchError(err => this.wooHelper.handleError(err)));
  }
}
