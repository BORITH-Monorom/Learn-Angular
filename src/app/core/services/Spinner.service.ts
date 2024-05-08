import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  private loadingSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }

  // Method to show spinner
  show(): void {
    this.loadingSubject.next(true);
  }

  // Method to hide spinner
  hide(): void {
    this.loadingSubject.next(false);
  }

  // Observable to track loading state
  isLoading(): Observable<boolean> {
    return this.loadingSubject.asObservable();
  }
}
