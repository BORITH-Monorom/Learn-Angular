import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';
import { _product } from 'src/app/core/model/product';
@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.scss']
})
export class PriceComponent {
  constructor(private auth:AuthService,private router: Router){}
  product: _product[] = [
    {id:1,day:2, name:"Angular", price:120, img:"./assets/images/angular.png"},
    {id:2,day:2, name:"Typescript", price:60 , img:"./assets/images/typescript.png"},
    {id:3,day:2, name:"Flutter", price:200, img:"./assets/images/flutter.png"},
]
@Output() purchaseEvent = new EventEmitter<string>();
onPurchase(productName: string, image: string){
  this.auth.isAuthenticated().subscribe((authen)=>{
    if(authen){
      this.router.navigate(['/purchase', productName]);
      this.purchaseEvent.emit(image);
    } else{
      this.router.navigate(['/login']);
    }
  })
}
}


