import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

/**
 * Interceptor for adding additional http request headers
 */
@Injectable()
export class HeaderHttpInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({
      withCredentials: true,
      headers: req.headers
        .set('x-api-key', environment.apiKey)
    });

    return next.handle(req);
  }
}
