import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogExampleComponent } from '../shared/material/dialog-example/dialog-example.component';
import { DialogData } from '../models/dialog-data';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) { }

  testDialog(data: DialogData): Observable<boolean>{
   return this.dialog.open(DialogExampleComponent,{
      data,
      width: '1000px',
      disableClose: true
    }).afterClosed();
  }

  test2Dialog(data: DialogData): Observable<boolean>{
    return this.dialog.open(DialogExampleComponent,{
      data,
      width: '500px',
      disableClose: true
    }).afterClosed();
  }


}
