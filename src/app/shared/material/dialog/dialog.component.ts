import { Component,Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogExampleComponent } from '../dialog-example/dialog-example.component';
import { DialogInjectComponent } from '../dialog-inject/dialog-inject.component';
import { DialogService } from 'src/app/services/dialog.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  constructor(
    private dialogService: DialogService,
    public dialog: MatDialog){}
  openDialog() {
      this.dialogService.testDialog({
        title: 'Are you sure?',
        message: 'Are you sure',
        submit:'submit',
        cancel:'close',
      });
  }


  openDialogInject(){
    this.dialog.open(DialogInjectComponent,{
      data: {
        animal: 'unicorn',
      }
    })
  }
  JobReview(){
    this.dialogService.test2Dialog({
      title: 'are you ok?',
      message: "I'm Fine ",
      submit:'submit',
      cancel: 'cancel',
    })
  }
}


