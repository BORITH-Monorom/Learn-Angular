import { Injectable } from "@angular/core";
import { COUNTRY_BASE_KEY } from "src/app/_utils/utils";
import { PersistanceService } from "./persistancec.service";

@Injectable({
  providedIn: 'root'
})
export class UtilsService{
  constructor(private localstorage: PersistanceService) { }
  resolvePromise(promise: any, resultObj: any) {
    if (promise.length > 0) {

      promise.forEach((ob: { subscribe: (arg0: (obj: { [x: string]: any; }) => void) => void; }) => {
        ob.subscribe((obj: { [x: string]: any; }) => {
          if (obj) {
            let key = Object.keys(obj)[0];
            let _obj = obj[key];

            if(_obj.href == "#"){
              resultObj["zone" + key] = `
                <img class="hj-img-maxwidth" src="${_obj.imgSrc}" alt="${_obj.imgAlt}" />
                <img src="${_obj.impressionUrl}" width="0" height="0" alt="" class="hj-hide" />
              `;
            }else {
              resultObj["zone" + key] = `
                <a href="${_obj.href}" target="${_obj.target}" title="${_obj.imgAlt}">
                <img class="hj-img-maxwidth" src="${_obj.imgSrc}" alt="${_obj.imgAlt}" />
                </a>
                <img src="${_obj.impressionUrl}" width="0" height="0" alt="" class="hj-hide" />
              `;
            }
          }
        });
      })

    }
  }
  range(start: number, stop: number): any[] {
    let number_array : any[] = [];

    for (let i = start; i < (stop + 1); i++) {
      number_array.push(i);
    }
    return number_array;
  }

  createObjects(obj: any, key: string) {
    if (obj)
      obj["zone" + key] = ""
  }

objectToParam(obj: { [key: string]: any }) {
  let filters = obj;
  let filterarr = [];
  let filterStr = "";
  for (let key of Object.keys(filters)) {
    if (filters[key]) {
      filterarr.push(`${key}=${filters[key]}`);
    }
  }

  if (filterarr) filterStr = filterarr.join("&");

  return filterStr;
}

getAdvertiseOn(): string {
  let CountryBase = this.localstorage.get(COUNTRY_BASE_KEY.COUNTRY_BASE);

  if (CountryBase?.id) return `&advertise_on=${CountryBase["id"]}`;

  return "&1=1";
}
}
