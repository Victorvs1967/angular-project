import { Component, inject } from '@angular/core';
import { needConfirmation } from 'src/app/layout/confirm-dialog/confirm-dialog.decorator';
import { ConfirmDialogData } from 'src/app/models/confirm-dialog-data';
import { DialogService } from 'src/app/service/dialog.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass']
})
export class AboutComponent {

  dialogService = inject(DialogService);

  message: ConfirmDialogData = {
    title: 'Hello',
    message: 'Everybody',
  };

  @needConfirmation()
  hello() {

  }
}
