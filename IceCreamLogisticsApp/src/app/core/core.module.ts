import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './security/login/login.component';
import {ModalModule} from 'ngx-bootstrap/modal';
import {LoginModalComponent} from './security/login/login-modal/login-modal.component';
import {FormsModule} from '@angular/forms';
import {NavbarComponent} from './components/navbar/navbar.component';
import {HttpClientModule} from "@angular/common/http";
import {BsDropdownModule} from "ngx-bootstrap/dropdown";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [LoginComponent, LoginModalComponent, NavbarComponent],
  exports: [
    LoginComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BsDropdownModule,
    ModalModule.forRoot(),
    FontAwesomeModule,
    RouterModule,
    ModalModule.forRoot(),
  ]
})
export class CoreModule {
}
