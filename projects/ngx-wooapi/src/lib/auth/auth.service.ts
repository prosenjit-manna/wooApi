import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

import { WoocommerceHelperService } from '../helper.service';
import {
  CreateNonce,
  CreateNonceRes,
  RegisterPayload,
  LoginPayload,
} from './auth.interface';
import { Observable } from 'rxjs';

// Plugins used https://wordpress.org/plugins/json-api-user/

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private httpClient: HttpClient,
    private wooHelper: WoocommerceHelperService
  ) {}

  createNonce(payload: CreateNonce): Observable<CreateNonceRes> {
    return this.httpClient.get<CreateNonceRes>(`api/get_nonce/`, {
      params: this.wooHelper.includeQuery(payload),
    });
  }

  register(registerData: RegisterPayload): Observable<any> {
    const payload = this.wooHelper.includeEncoded(registerData);
    return this.httpClient
      .post(`api/user/register/`, payload)
      .pipe(catchError((err) => this.wooHelper.handleError(err)));
  }

  retrievePassword(username: string): Observable<any> {
    const payload = this.wooHelper.includeEncoded({ user_login: username });
    return this.httpClient
      .post(`api/user/retrieve_password/`, payload)
      .pipe(catchError((err) => this.wooHelper.handleError(err)));
  }

  getAuthToken(payload: LoginPayload): Observable<any> {
    return this.httpClient
      .post(`wp-json/jwt-auth/v1/token`, payload)
      .pipe(catchError((err) => this.wooHelper.handleError(err)));
  }

  generateAuthCookie(data: LoginPayload): Observable<any> {
    return this.httpClient
      .post(
        `api/user/generate_auth_cookie/`,
        this.wooHelper.includeEncoded(data)
      )
      .pipe(catchError((err) => this.wooHelper.handleError(err)));
  }
}
