import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

import { WoocommerceHelperService } from '../helper.service';
import { CreateNonce, CreateNonceRes, RegisterPayload, LoginPayload } from '@services/auth/auth.interface';
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

  retrivePassword(username: string) {
    return this.httpClient.get(`api/user/retrieve_password/`, { params: this.wooHelper.includeQuery({user_login: encodeURI(username)}) })
      .pipe(catchError(err => this.wooHelper.handleError(err)));
  }

  getAuthToken(payload: LoginPayload) {
    return this.httpClient.post(`wp-json/jwt-auth/v1/token`, payload)
    .pipe(catchError(err => this.wooHelper.handleError(err)));
  }
}
