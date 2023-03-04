import { Component, Inject } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.sass']
})
export class SignupComponent {
  
  signupForm?: UntypedFormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: User,
    private formBuilder: UntypedFormBuilder,
  ) { }

  ngOnInit(): void {
     this.signupForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      password2: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      firstName: [''],
      lastName: [''],
      phone: [''],
      address: [''],
     });
  }

  submitSignup() {
    console.log(this.signupForm?.value);
  }
}
