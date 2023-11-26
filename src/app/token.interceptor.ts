import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private authService : AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const excludedUrls = ["/login", "/inscription","/verification"];
  
    // Tester si l'URL de la demande est dans les URL exclues
    const shouldExclude = excludedUrls.some(url => request.url.includes(url));
  
    if (!shouldExclude) {
      let jwt = this.authService.getToken();
      if (jwt) {
        let reqWithToken = request.clone({
          setHeaders: { Authorization: "Bearer " + jwt }
        });
        return next.handle(reqWithToken);
      }
    }
  
    return next.handle(request);
  }
  }  
