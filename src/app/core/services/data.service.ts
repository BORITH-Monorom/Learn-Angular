import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
    handlePageEvent(event: Event | undefined, PageEvent: PageEvent) {
      throw new Error('Method not implemented.');
    }

    constructor(private http: HttpClient){}
    PhotoUrl = 'https://jsonplaceholder.typicode.com/photos';
    postUrl = 'https://jsonplaceholder.typicode.com/posts';

    getPhotoData(): Observable<any>{
      return this.http.get(this.PhotoUrl);
    }
    getPostData(): Observable<any>{
      return this.http.get(this.postUrl);
    }
  }


