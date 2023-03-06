import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { needConfirmation } from 'src/app/layout/confirm-dialog/confirm-dialog.decorator';
import { ConfirmDialogData } from 'src/app/models/confirm-dialog-data';
import { DialogService } from 'src/app/service/dialog.service';

const MESSAGE: ConfirmDialogData = {
  title: 'Users',
  message: 'Are you sure to show list users?',
};

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass']
})
export class AboutComponent {

  dialogService = inject(DialogService);

  constructor(private router: Router) {
    
  }

  @needConfirmation(MESSAGE)
  hello() {
    this.router.navigate(['users']);
  }
}
