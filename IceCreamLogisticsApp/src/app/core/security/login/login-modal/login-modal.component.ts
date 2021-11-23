import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {AuthService} from '../../auth.service';
import {AuthClient} from '../../../api/api';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent {

  loginForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
    });
  constructor(private fb: FormBuilder, private authService: AuthService, private authClient: AuthClient) {
  }
  submit(): void {
    if (this.loginForm.valid){
      this.authClient.login(this.loginForm.value).subscribe(
        (data) => {
          this.authService.setToken(data);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
}
