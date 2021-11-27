import {EventEmitter, Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {
  }

  private _token: BehaviorSubject<string> = new BehaviorSubject<string>(this.getToken());
  public get token(): Observable<string> {
    return this._token.asObservable();
  }

  getToken(): string {
    return sessionStorage.getItem('token');
  }

  setToken(token: string):void {
    sessionStorage.setItem('token', token);
    this._token.next(token);
  }

  Logout() {

  }
}
