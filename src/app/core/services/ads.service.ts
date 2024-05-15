import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { adsBanners } from "../model/employer/adsService.model";
@Injectable({
  providedIn: 'root'
})
export class AdsService {
  constructor(private http: HttpClient){}

  gitAdsSlide(): Observable<adsBanners[]>{
    return this.http.get<adsBanners[]>('http://localhost:3000/ads-banner');
  }
}
