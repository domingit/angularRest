import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { ErrorHandlerInterceptor } from './error-handler.interceptor';
import { HeaderHttpInterceptor } from './header.interceptor';

@NgModule({
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorHandlerInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HeaderHttpInterceptor, multi: true },
  ]
})
export class InterceptorsModule { }
