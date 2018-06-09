import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

import { WoocommerceHelperService } from '../helper.service';
import { CreateNonce, CreateNonceRes, RegisterPayload } from '@services/auth/auth.interface';
import { Observable } from 'rxjs';

// Plugins used https://wordpress.org/plugins/json-api-user/

@Injectable()
export class AuthService {

  constructor(
    private httpClient: HttpClient,
    private wooHelper: WoocommerceHelperService
  ) { }

  createNonce(payload: CreateNonce): Observable<CreateNonceRes> {
    return this.httpClient.get(`api/get_nonce/`, {params: this.wooHelper.includeQuery(payload)})
      .pipe(catchError(err => this.wooHelper.handleError(err)));
  }

  register(payload: RegisterPayload) {
    return this.httpClient.get(`api/user/register/`, { params: this.wooHelper.includeQuery(payload) })
      .pipe(catchError(err => this.wooHelper.handleError(err)));
  }
}
