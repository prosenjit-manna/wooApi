import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiIndexService {
  constructor(
    private httpClient: HttpClient,
  ) {}

  getIndex(): Observable<any> {
    return this.httpClient
      .get<any>('/')
  }

}
