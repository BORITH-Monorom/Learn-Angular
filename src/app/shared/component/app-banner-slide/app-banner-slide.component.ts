import { HttpClient } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { adsBanners } from 'src/app/core/model/employer/adsService.model';
import { AdsService } from 'src/app/core/services/ads.service';
@UntilDestroy()
@Component({
  selector: 'app-banner-slide',
  templateUrl: './app-banner-slide.component.html',
  styleUrl: './app-banner-slide.component.scss'
})
export class AppBannerSlideComponent implements OnInit{
  slides: adsBanners[] =[];

constructor(private AdService: AdsService){};

ngOnInit(): void{
  this.AdService.gitAdsSlide().pipe(untilDestroyed(this)).subscribe(res =>{
    if(res){
      this.slides = res.slice(0,3);
}
})
}

}
