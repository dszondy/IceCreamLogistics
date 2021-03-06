import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {AuthService} from '../auth.service';
import {AuthClient, SecurityClient, UserShallowDto} from '../../api/api';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-password-change-modal',
  templateUrl: './password-change-modal.component.html',
  styleUrls: ['./password-change-modal.component.css']
})
export class PasswordChangeModalComponent {
  passwordForm = this.fb.group({
    password1: ['', Validators.required],
    password2: ['', Validators.required]
  });
  @Input()
  userId: number;
  completionSubject = new Subject<any>();
  completionObservable = this.completionSubject.asObservable();

  constructor(private fb: FormBuilder, private securityService: SecurityClient) {
  }

  submit(): void {
    if (this.passwordForm.valid) {
      this.securityService.overridePassword(this.userId, this.passwordForm.value.password1).subscribe(
        (data) => {
          this.completionSubject.next();
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

  private passwordsEqual(): boolean {
    const password1 = this.passwordForm.controls.password1.value;
    const password2 = this.passwordForm.controls.password2.value;
    return (password1 === password2);
  }
}

