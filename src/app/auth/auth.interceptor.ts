import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import {catchError, Observable} from 'rxjs';
import {AuthManagerService} from "./auth-manager.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private authManagerService: AuthManagerService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(this.authManagerService.isAnonymous())
      return next.handle(request);

    const authReq = request.clone({
      headers: request.headers.set('Authorization', this.authManagerService.getToken()!!)
    });

    return next.handle(authReq).pipe(
      catchError((err: HttpErrorResponse) => {
        if(err.status == 401) {
          this.authManagerService.logoutUserAndRedirect();
        }

        throw err;
      })
    );
  }
}
