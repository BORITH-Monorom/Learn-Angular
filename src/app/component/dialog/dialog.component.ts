import { Component,Inject,OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  dialogTitle: any;
  dialogContent: any;
  constructor(private ref: MatDialogRef<DialogComponent>,@Inject(MAT_DIALOG_DATA) private data:any){}
  ngOnInit():void{
    this.dialogTitle = this.data;
    this.dialogContent = this.data;
  }

  close(){
    this.ref.close('Closed dialog');
  }
}
