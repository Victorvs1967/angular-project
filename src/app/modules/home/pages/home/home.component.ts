import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {

  color: string = '#000';
  textColor = { 'color': this.color };

  constructor() {
    setTimeout(() => {
      this.color =  'red';
      this.textColor = { 'color': this.color };
    }, 2000);
  }

}
