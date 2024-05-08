import { Component, OnInit, OnDestroy } from '@angular/core';
import { AdsService } from 'src/app/core/services/ads.service';
import { UtilsService } from 'src/app/core/services/utils.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit,OnDestroy {
show: boolean =true;
  ngOnDestroy(): void {

  }

  zoneResult = {};
  promise: any[] = [];

  constructor(private adsService: AdsService, private utils: UtilsService) {
  }

  ngOnInit() {
    this.utils.range(7,39).forEach(v => {
      this.promise.push(this.adsService.getAdRevive(v))
      this.utils.createObjects(this.zoneResult,v)
    })

    this.utils.resolvePromise(this.promise, this.zoneResult);
  }

  getKeys(obj: Object){
    return Object.keys(obj);
  }
}

