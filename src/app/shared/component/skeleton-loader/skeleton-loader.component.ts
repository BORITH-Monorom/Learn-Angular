import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SpinnerService } from 'src/app/core/services/Spinner.service';

@Component({
  selector: 'app-skeleton-loader',
  standalone: true,
  imports: [],
  templateUrl: './skeleton-loader.component.html',
  styleUrl: './skeleton-loader.component.scss'
})
export class SkeletonLoaderComponent  implements OnInit {
  isLoading: Observable<boolean>;

  constructor(private spinnerService: SpinnerService) { }
  ngOnInit(): void {
    this.isLoading = this.spinnerService.isLoading();
  }
}
