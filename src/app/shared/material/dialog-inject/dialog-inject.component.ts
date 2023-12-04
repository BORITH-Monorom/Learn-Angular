import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA,  MatDialogTitle,
  MatDialogContent, } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-inject',
  templateUrl: './dialog-inject.component.html',
  styleUrls: ['./dialog-inject.component.scss']
})
export class DialogInjectComponent {
constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData){}
}

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}
