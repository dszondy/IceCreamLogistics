import { Component, OnInit } from '@angular/core';
import {AuthClient, Role, UserSecurityInfoDto} from '../../api/api';
import {PasswordChangeModalComponent} from '../../security/password-change-modal/password-change-modal.component';
import {AuthService} from '../../security/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  private user: UserSecurityInfoDto;
  Role = Role;
  constructor(private authClient: AuthClient, private authService: AuthService) {
    this.authClient.getCurrentUser().subscribe(user => {
      this.user = user;
    });
  }

  hasRole(role: Role): boolean {
    return this.user?.roles.includes(role);
  }

  isClient(): boolean {
    return !!this.user?.client;
  }

  ngOnInit(): void {
  }

  changePassword() {
    this.authService.changePassword(this.user.id);
  }
}
