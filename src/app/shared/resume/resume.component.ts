import { Component } from '@angular/core';
import { ImageControlComponent } from 'src/app/component/image-control/image-control.component';


@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent {
imageReady(blob: Blob) {
console.log(blob)
}

}
