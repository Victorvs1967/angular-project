import { Component, Inject } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginData } from 'src/app/models/login-data.model copy';
import { SignupComponent } from '../signup/signup.component';
import { userModal } from '../user-dialog.decorator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent {

  loginForm?: UntypedFormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: LoginData,
    private formBuilder: UntypedFormBuilder,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  submitLogin() {
    console.log(this.loginForm?.value);
  }

  @userModal(SignupComponent)
  signup() {
    this.router.navigate(['signup']);
  }
}
