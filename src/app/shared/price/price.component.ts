import { Component } from '@angular/core';
import {_product} from '../../core/model/product'
import { LoginComponent } from '../login/login.component';
@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.scss']
})
export class PriceComponent {
  constructor(){}
  product: _product[] = [
    {id:1,day:30, name:"standard", price:60},
    {id:2,day:60, name:"standard", price:120},
    {id:3,day:120, name:"standard", price:240}
]


}


