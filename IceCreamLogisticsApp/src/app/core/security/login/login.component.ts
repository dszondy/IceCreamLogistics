import {AfterViewInit, Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {BsModalRef, BsModalService, ModalModule} from 'ngx-bootstrap/modal';
import {LoginModalComponent} from "./login-modal/login-modal.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  bsModalRef?: BsModalRef;
  template = ViewChild('template');
  constructor(private modalService: BsModalService) {
    this.bsModalRef = this.modalService.show(LoginModalComponent, {});
  }
}
