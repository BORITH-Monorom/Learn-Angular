import { Component } from '@angular/core';
import { append } from '@ngxs/store/operators';

@Component({
  selector: 'app-post-job',
  templateUrl: './post-job.component.html',
  styleUrls: ['./post-job.component.scss']
})
export class PostJobComponent {
titleConfig = {
multiSelect: true,
className: 'w-full',
}
countryConfig = {
  multiSelect: true,
  appearance:'fill',
  className:'w-full'
}
functionConfig = {
  appearance: 'fill',
  className: 'w-full'

}


}
