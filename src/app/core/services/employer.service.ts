import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { hjSiteStatistic } from "../model/employer/employer-utils.model";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EmployerService{
  constructor(
    private http: HttpClient
  ){}
  getSiteStatistic(): Observable<hjSiteStatistic> {
    return this.http.get<hjSiteStatistic>(`http://localhost:3000/site-statistics`);
  }

}
