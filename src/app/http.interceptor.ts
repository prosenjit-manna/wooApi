import {
  Injectable,
  // Injector
 } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
// import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

// import { AuthService } from './auth.service';
import { environment } from '../environments/environment';

@Injectable()
export class AppInterceptor implements HttpInterceptor {

  constructor(
    // private injector: Injector,
    // private router: Router
  ) { }

  private includeWooAuth(url) {
    const wooAuth = `consumer_key=${environment.woocommerce.consumer_key}&consumer_secret=${environment.woocommerce.consumer_secret}`;
    const hasQuery = url.includes('?');
    let return_url = '';
    if (hasQuery) {
      return_url =  wooAuth;
    } else {
      return_url = '?' + wooAuth;
    }
    return return_url;
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authRequest;
    // const auth = this.injector.get(AuthService);
    let requestUrl = '';
    if (request.url.includes('api') || request.url.includes('jwt')) {
      requestUrl = `${environment.origin}/${request.url}`;
    } else {
      requestUrl = `${environment.origin}${environment.wcEndpoint}/${request.url}${this.includeWooAuth(request.url)}`;
    }
    authRequest = request.clone({
      url: requestUrl
    });

    return next.handle(authRequest)
      .pipe(
        catchError(err => {
          if (err instanceof HttpErrorResponse && err.status === 0) {
            console.log('Check Your Internet Connection And Try again Later');
          } else if (err instanceof HttpErrorResponse && err.status === 401) {
            // auth.setToken(null);
            // this.router.navigate(['/', 'login']);
          }
          return throwError(err);
        })
      );
  }
}
