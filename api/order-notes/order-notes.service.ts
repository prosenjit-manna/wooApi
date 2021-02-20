import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { WoocommerceHelperService } from '../helper.service';
import { OrderNote, OrderNoteRes } from './order-notes.interface';


@Injectable({
  providedIn: 'root'
})
export class WoocommerceOrderNoteService {

  constructor(
    private httpClient: HttpClient,
    private wooHelper: WoocommerceHelperService
  ) { }

  createNote(id: number, note: OrderNote): Observable<OrderNoteRes> {
    return this.httpClient.post<OrderNoteRes>(`orders/${id}/notes`, note)
      .pipe(catchError(err => this.wooHelper.handleError(err)));
  }

  retrieveNote(id: number, noteid: number ): Observable<OrderNoteRes> {
    return this.httpClient.get<OrderNoteRes>(`orders/${id}/notes/${noteid}`)
      .pipe(catchError(err => this.wooHelper.handleError(err)));
  }


  retrieveNotes(id: number ): Observable<OrderNoteRes[]> {
    return this.httpClient.get<OrderNoteRes[]>(`orders/${id}/notes/`)
      .pipe(catchError(err => this.wooHelper.handleError(err)));
  }

  deleteNote(id: number, noteid: number ): Observable<OrderNoteRes> {
    return this.httpClient.delete<OrderNoteRes>(`orders/${id}/notes/${noteid}`)
      .pipe(catchError(err => this.wooHelper.handleError(err)));
  }

}
