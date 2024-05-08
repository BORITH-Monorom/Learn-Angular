import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersistanceService {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }
  set(key: string, data: any): void {
    try {
      if(isPlatformBrowser(this.platformId)){
        localStorage.setItem(key, JSON.stringify(data));
      }
    }catch(e){

    }
  }
  get(key: string) {
    try {
      if(isPlatformBrowser(this.platformId)){
        let value = localStorage.getItem(key);

        if(value)
          return JSON.parse(value);
      }
      else return null;
    } catch (e) {
      console.error('Error getting data from localStorage', e);
      return null;
    }
  }

  remove(key: string){
    try{
      if(isPlatformBrowser(this.platformId)){
        localStorage.removeItem(key);
      }
    }catch(e){

    }
  }
}
