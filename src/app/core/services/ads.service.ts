import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { UtilsService } from "./utils.service";
import { map, mergeMap, shareReplay, take } from "rxjs/operators";
import { Select } from "@ngxs/store";
import { Observable } from "rxjs";
import { ISearch } from "../model/search.model";
import { SearchJobState } from "../state/search-job/search-job.state";
import { IAdRevive } from "../model/employer/dropdown-lists-model";
import { adsBanners } from "../model/employer/adsService.model";
@Injectable({
  providedIn: 'root'
})
export class AdsService {
  @Select(SearchJobState.getAdsFilters) adsFilters: Observable<ISearch>;
  constructor(private http: HttpClient, private utilService: UtilsService){}
  getAdRevive(zoneid: number, params: any = {}): Observable<any> {
    return this.adsFilters.pipe(take(1), mergeMap(val => {
      let url = "https://ad.hrincjob.com/www/delivery/afr.php?zoneid=" + zoneid + this.utilService.getAdvertiseOn();
      if (val && Object.keys(val).length > 0)
        url = url + "&" + this.utilService.objectToParam(val)

      let headers = new HttpHeaders();
      headers = headers.set('Content-Type', "text/html");
      let href, target, imgSrc, imgAlt, impressionUrl = "";
      let html: any;
      return this.http.get(url, { headers }).pipe(take(1), map(string => {
        try {
          let domparser = new DOMParser()
          html = domparser.parseFromString(string.toString(), "text/html");
          let a = html.body.getElementsByTagName("a").item(0);
          let divImp = html.body.querySelector("div");
          let innerImg = divImp.querySelector("img");

          if (!a) {
            href = "#";
            target = "";
            if(+html.body.getElementsByTagName("img").item(0).getAttribute("width") == 0){
              imgSrc = "";
              imgAlt = "";
            }else{
              imgSrc = html.body.getElementsByTagName("img").item(0).getAttribute("src");
              imgAlt = html.body.getElementsByTagName("img").item(0).getAttribute("alt");
              impressionUrl = innerImg.getAttribute("src");
            }
          } else {
            href = a.getAttribute("href");
            target = a.getAttribute("target");
            imgSrc = a.getElementsByTagName("img").item(0).getAttribute("src");
            imgAlt = a.getElementsByTagName("img").item(0).getAttribute("alt");
            impressionUrl = innerImg.getAttribute("src");
          }
        } catch (err) {
          href = "#";
          target = "";
          imgSrc = html?.body.getElementsByTagName("img").item(0).getAttribute("src") || '';
          imgAlt = html?.body.getElementsByTagName("img").item(0).getAttribute("alt") || '';
          impressionUrl = '';
        }

        let scrSplits = imgSrc.split(".");
        if (scrSplits && scrSplits[scrSplits.length - 1].length > 4) {
          imgSrc = imgAlt = "";
        }
        return { [zoneid]: <IAdRevive>{ href, target, imgSrc, imgAlt, impressionUrl } };
      }), shareReplay(1));
    })
    );
  }

  gitAdsSlide(): Observable<adsBanners[]>{
    return this.http.get<adsBanners[]>('http://localhost:3000/ads-banner');
  }
}
