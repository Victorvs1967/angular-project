import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {

  color: string = '#000';
  textColor = { 'color': this.color };

  btnStatus: string = 'Button Not Clicked...'

  user: any = {
    name: 'Victor',
    job: 'Web Developer',
  };

  name = new FormControl(this.user.name, Validators.required);

  constructor() {
    setTimeout(() => {
      this.color =  'red';
      this.textColor = { 'color': this.color };
    }, 2000);
  }

  setBtnStatus() {
    this.btnStatus = 'Button Clicked!'
  }
}
