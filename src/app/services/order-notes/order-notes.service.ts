import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { WoocommerceHelperService } from '../helper.service';
import { OrderNote, OrderNoteRes } from './order-notes.interface';

@Injectable()
export class WoocommerceOrderNoteService {

  constructor(
    private httpClient: HttpClient,
    private wooHelper: WoocommerceHelperService
  ) { }

  /**
   * Create a order note
   * URL: https://woocommerce.github.io/woocommerce-rest-api-docs/#create-an-order-note
   */
  createNote(id: number, note: OrderNote): Observable<OrderNoteRes> {
    return this.httpClient.post<OrderNoteRes>(`orders/${id}/notes`, note)
      .pipe(catchError(err => this.wooHelper.handleError(err)));
  }

  /**
   * Retrive a order note
   * URL: https://woocommerce.github.io/woocommerce-rest-api-docs/#retrieve-an-order-note
   */
  retriveNote(id: number, noteid: number ): Observable<OrderNoteRes> {
    return this.httpClient.get<OrderNoteRes>(`orders/${id}/notes/${noteid}`)
      .pipe(catchError(err => this.wooHelper.handleError(err)));
  }


   /**
   * List all order notes
   * URL: https://woocommerce.github.io/woocommerce-rest-api-docs/#list-all-order-notes
   */
  retriveNotes(id: number ): Observable<OrderNoteRes> {
    return this.httpClient.get<OrderNoteRes>(`orders/${id}/notes/`)
      .pipe(catchError(err => this.wooHelper.handleError(err)));
  }

  /**
   * Delete a order note
   * URL: https://woocommerce.github.io/woocommerce-rest-api-docs/#delete-an-order-note
   */
  deleteNote(id: number, noteid: number ): Observable<OrderNoteRes> {
    return this.httpClient.delete<OrderNoteRes>(`orders/${id}/notes/${noteid}`)
      .pipe(catchError(err => this.wooHelper.handleError(err)));
  }

}
