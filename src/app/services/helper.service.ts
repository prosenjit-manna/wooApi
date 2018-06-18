import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable()
export class  WoocommerceHelperService {
  constructor() { }


  handleError(error: HttpErrorResponse): Observable<any> {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
        console.log('Backend response', error);
        return throwError(error.error);
    }
    // return an observable with a user-facing error message
    return throwError({message: 'Something bad happened; please try again later.'});
  }

  includeQuery(query = {}) {
    const queryPatch = {};
    Object.keys(query).forEach(key => {
      queryPatch[key] = query[key].toString();
    });
    return queryPatch;
  }

  includeEncoded(query = {}) {
    const params = new FormData();
    Object.keys(query).forEach((key) => {
      params.append(key, query[key]);
    });
    console.log(params);
    return params;
  }

  includeResponseHeader(response, responseBodyKey?: string) {
    const headers = {};
    response.headers.keys().forEach(key => {
      headers[key] = response.headers.get(key);
    });
    let responseData = {};
    if (responseBodyKey) {
      responseData[responseBodyKey] = response.body;
    } else {
      responseData = response.body;
    }
    responseData['headers'] = headers;
    return responseData;
  }
}
