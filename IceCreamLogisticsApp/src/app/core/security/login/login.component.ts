import {AfterViewInit, Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {BsModalRef, BsModalService, ModalModule} from 'ngx-bootstrap/modal';
import {LoginModalComponent} from "./login-modal/login-modal.component";
import {AuthService} from '../auth.service';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  bsModalRef?: BsModalRef;
  template = ViewChild('template');
  constructor(private modalService: BsModalService, private authService: AuthService) {
    authService.token.pipe(
      tap(token => {
        if (token) {
          this.bsModalRef?.hide();
        } else {
          this.bsModalRef = this.modalService.show(LoginModalComponent, {ignoreBackdropClick: true});
        }
    })).subscribe();
  }
}
