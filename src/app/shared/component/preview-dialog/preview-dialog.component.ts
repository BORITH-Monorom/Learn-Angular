import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-preview-dialog',
  templateUrl: './preview-dialog.component.html',
  styleUrls: ['./preview-dialog.component.scss']
})
export class PreviewDialogComponent implements OnInit {
dialogTitle:any;
dialogContent:any;
constructor(private ref: MatDialogRef<PreviewDialogComponent>,
  @Inject(MAT_DIALOG_DATA) private data:any){}

ngOnInit() :void{
 this.dialogTitle = this.data;
 this.dialogContent= this.data;
}

close(){
  this.ref.close();
}

}
