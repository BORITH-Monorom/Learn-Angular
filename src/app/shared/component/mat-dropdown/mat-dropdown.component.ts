
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
@Component({
  selector: 'app-mat-dropdown',
  templateUrl: './mat-dropdown.component.html',
  styleUrl: './mat-dropdown.component.scss'
})
export class MatDropdownComponent implements OnInit{
  constructor(){}
  removeable:boolean = true;
  selectable:boolean = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  filteredList?:Observable<any[]>;
  filtered_value: any[] = [];
  chipList: string[]=[];
  pkList: number[]=[];

ngOnInit(): void {

}
remove(value:any):void{

}
@Input("config") config:IDropConfig = {multiSelect:false};
@Input() placeholder:string ;
@Input() error: string;
@Input() inputType: string;

configuration:IDropConfig ={
  multiSelect:false,
  appearance:'',
  className: '',
}
}
export interface IDropConfig{
  multiSelect?:boolean,
  appearance?:any,
  className?:string,
}
