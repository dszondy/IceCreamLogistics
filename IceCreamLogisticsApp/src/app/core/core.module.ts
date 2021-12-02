import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './security/login/login.component';
import {ModalModule} from 'ngx-bootstrap/modal';
import {LoginModalComponent} from './security/login/login-modal/login-modal.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NavbarComponent} from './components/navbar/navbar.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {BsDropdownModule} from "ngx-bootstrap/dropdown";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {RouterModule} from "@angular/router";
import {TokenInterceptor} from './security/token-interceptor';
import { PasswordChangeModalComponent } from './security/password-change-modal/password-change-modal.component';
import { InventoryWarningComponent } from './components/inventory-warning/inventory-warning.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import {BarChartModule, PieChartModule} from '@swimlane/ngx-charts';
import {AlertModule} from 'ngx-bootstrap/alert';


@NgModule({
  declarations: [LoginComponent, LoginModalComponent, NavbarComponent, PasswordChangeModalComponent, InventoryWarningComponent, DashboardComponent],
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
        ReactiveFormsModule,
        PieChartModule,
        AlertModule,
        BarChartModule,
    ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ]
})
export class CoreModule {
}
