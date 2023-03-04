import { Component, inject } from '@angular/core';
import { LoginComponent } from 'src/app/modules/auth/pages/login/login.component';
import { SignupComponent } from 'src/app/modules/auth/pages/signup/signup.component';
import { userModal } from 'src/app/modules/auth/pages/user-dialog.decorator';
import { DialogService } from 'src/app/service/dialog.service';
import { needConfirmation } from '../confirm-dialog/confirm-dialog.decorator';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent {

  dialogService = inject(DialogService);
  
  constructor() {}

  @needConfirmation()
  logout() {
    console.log('1111');
  }

  @userModal(LoginComponent)
  login() {
    console.log('2222');
  }

  @userModal(SignupComponent)
  signup() {}
}
