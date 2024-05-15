import { Component, OnInit, OnDestroy, signal, computed, inject } from '@angular/core';
import { AdsService } from 'src/app/core/services/ads.service';
import { DarkModeService } from 'src/app/core/services/dark-mode.service';
import { UtilsService } from 'src/app/core/services/utils.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit,OnDestroy {
  // darkModeService: DarkModeService = inject(DarkModeService);
show: boolean = true;
  totalCost: any
  selectedItem: string ='';
  ngOnDestroy(): void {
  }

  constructor(private utils: UtilsService) {
  }

  ngOnInit() {
    const price = signal<number>(10);
    const quantity = signal<number>(5);
    const totalCost = computed(() => price() * quantity());
    console.log(totalCost(),"total cost")
  }

  onItemSelected(itemName: string){
    this.selectedItem = itemName;
  }

}


