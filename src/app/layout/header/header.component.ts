import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from 'src/app/modules/auth/pages/login/login.component';
import { SignupComponent } from 'src/app/modules/auth/pages/signup/signup.component';
import { userModal } from 'src/app/modules/auth/pages/user-dialog.decorator';
import { AuthService } from 'src/app/service/auth.service';
import { DialogService } from 'src/app/service/dialog.service';
import { needConfirmation } from '../confirm-dialog/confirm-dialog.decorator';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent {

  dialogService = inject(DialogService);
  
  constructor(
    private auth: AuthService,
    private router: Router,
  ) {}

  @needConfirmation({ title: 'Logout', message: 'You logout from site. A you sure?' })
  logout() {
    this.auth.logout();
    this.router.navigate(['home']);
  }

  @userModal(LoginComponent)
  login() {
    this.router.navigate(['about']);
  }

  @userModal(SignupComponent)
  signup() {
    this.router.navigate(['users']);
  }
}
