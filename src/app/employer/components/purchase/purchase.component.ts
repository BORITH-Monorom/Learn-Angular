import { Component, signal,computed, effect, WritableSignal} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { _food } from 'src/app/core/model/product';

interface itemType  {
  name: string;
  quantity: number;
  lastEditedBy: string | null;
}
@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.scss'],
})
export class PurchaseComponent {
  title:string;
  img:string;
  myImage: any;
constructor(private route: ActivatedRoute){}
onPurchase(image:string){
  console.log("Product purchased;", image)
}
ngOnInit(): void{
  this.route.params.subscribe(params=>{
    this.title = params['productName']

  });

}

  // title:string = "Welcome to my Product"
  items: itemType[] = [
            { name: 'Apples', quantity: 5, lastEditedBy: null },
            { name: 'Bananas', quantity: 3, lastEditedBy: null },
            { name: 'Milk', quantity: 1, lastEditedBy: null },
          ];

  // Define a signal for the list of items
  itemList: WritableSignal<itemType[]>  = signal(this.items);

  // Define a signal for the current user's name
    currentUser: WritableSignal<string>  = signal('Husband');
  newItemName: string;
  newItemQuantity: number;
Employer: any;

  addItem() {
    // Add a new item to the itemList signal with the current user's name as the last edited by value
    this.itemList.set([...this.itemList(),
      {
        name: this.newItemName,
        quantity: this.newItemQuantity,
        lastEditedBy: this.currentUser()
      }
    ]);

    // Clear the input fields
    this.newItemName = '';
    this.newItemQuantity =1;
    console.log(this.itemList)

  }

  removeItem(item:any) {
    console.log(item);
    // Remove the selected item from the itemList signal
    this.itemList.set(this.itemList().filter((i) => i !== item));
  }
}
