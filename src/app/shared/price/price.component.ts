import { Component } from '@angular/core';
import {_product} from '../../core/model/product'
import { LoginComponent } from '../login/login.component';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.scss']
})
export class PriceComponent {
  constructor(private auth:AuthService,private router: Router){}
  product: _product[] = [
    {id:1,day:30, name:"standard", price:60},
    {id:2,day:60, name:"standard", price:120},
    {id:3,day:120, name:"standard", price:240}
]

onPurchase(){
  this.auth.isAuthenticated().subscribe((authenticated)=>{
    if(authenticated){
      this.router.navigate(['/purchase']);
    } else{
      this.router.navigate(['/login']);
    }
  })
}
}


