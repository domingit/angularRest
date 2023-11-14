import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req)
      .pipe(
        catchError((res: any) => this.errorHandler(res)),
      );
  }

  private errorHandler(response: HttpEvent<any>): Observable<HttpEvent<any>> {

    if (response instanceof HttpErrorResponse) {
      alert('Request Error');
    }

    return of(response);
  }
}
