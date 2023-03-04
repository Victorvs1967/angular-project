import { NgModule } from '@angular/core';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DialogService } from 'src/app/service/dialog.service';

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
  ],
  imports: [
    SharedModule,
  ],
  providers: [
    DialogService,
  ],
})
export class AuthModule { }
