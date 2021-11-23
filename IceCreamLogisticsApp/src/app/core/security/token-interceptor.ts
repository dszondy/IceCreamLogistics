import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {AuthService} from './auth.service';


@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private auth: AuthService, private router: Router) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    request = request.clone({
      setHeaders: {
        Authorization   : `Bearer ${this.auth.getToken()}`
      }
    });
    const handle = next.handle(request);
    handle.subscribe(_ => {
    }, err => {
      if (err.status === 401) {
        this.auth.Logout();
      }
    });
    return handle;
  }
}
