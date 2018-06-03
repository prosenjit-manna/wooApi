import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class HomeService {

  constructor(
    private http: HttpClient
  ) { }

  getUsers() {
    return this.http.get('/users')
      .pipe(
        map(res => res),
        catchError(err => Observable.throw(err))
      )
  }
}
