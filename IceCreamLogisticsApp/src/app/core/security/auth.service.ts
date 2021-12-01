import {EventEmitter, Injectable} from '@angular/core';
import {BehaviorSubject, Observable, ReplaySubject, Subject} from 'rxjs';
import {BsModalService} from 'ngx-bootstrap/modal';
import {PasswordChangeModalComponent} from './password-change-modal/password-change-modal.component';
import {UserShallowDto} from '../api/api';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private modalService: BsModalService) {
    const token = this.getToken();
    if (token) {
      this._token.next(token);
    }
    }

  private _token = new ReplaySubject<string>(1);
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

  logout() {
    this.setToken(undefined)
  }

  changeOwnPassword(): void {
    const modalRef = this.modalService.show(PasswordChangeModalComponent);
  }

  changePassword(userId: number): void {
    const modalRef = this.modalService.show(PasswordChangeModalComponent, {
      initialState: {
        userId
      }
    });
  }

}
