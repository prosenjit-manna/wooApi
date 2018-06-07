import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class  WoocommerceHelperService {
  constructor() { }


  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
        console.log('Backend response', error);
        return Observable.throw(error.error);
    }
    // return an observable with a user-facing error message
    return Observable.throw({message: 'Something bad happened; please try again later.'});
  }

  includeQuery(query = {}) {
    const queryPatch = {};
    Object.keys(query).forEach(key => {
      queryPatch[key] = query[key].toString();
    });
    return queryPatch;
  }

  includeResponseHeader(response) {
    const headers = {};
    const rsponseBody = response.body;
    response.headers.keys().forEach(key => {
      headers[key] = response.headers.get(key);
    });
    rsponseBody['headers'] = headers;
    return rsponseBody;
  }
}
