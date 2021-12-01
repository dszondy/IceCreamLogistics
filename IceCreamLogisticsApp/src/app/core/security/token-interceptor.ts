import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {AuthService} from './auth.service';
import {tokenize} from 'ngx-bootstrap/typeahead';
import {flatMap} from 'rxjs/internal/operators';


@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private auth: AuthService, private router: Router) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (request.url.match('auth$') &&request.method === 'POST'){
      return next.handle(request);
    }

    return this.auth.token.pipe(flatMap(token => {
      if (token) {
        request = request.clone({
          setHeaders: {
            Authorization: `Bearer ${token}`
          }
        });
      }
      return next.handle(request);
    }));
  }
}
