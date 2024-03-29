import { Component, Input, computed, signal,inject, Output, EventEmitter, effect } from '@angular/core';
import { CropperDialogComponent, CropperDialogResult } from '../cropper-dialog/cropper-dialog.component';
import { filter } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-image-control',
  templateUrl: './image-control.component.html',
  styleUrls: ['./image-control.component.scss'],
})
export class ImageControlComponent {
  inputField: any;

  imageWidth = signal(0);
  @Input() set width(val: number) {
    this.imageWidth.set(val);
  }

  imageHeight = signal(0);
  @Input() set height(val: number) {
    this.imageHeight.set(val);
  }
  placeholder = computed(
    () => `https://placehold.co/${this.imageWidth()}x${this.imageHeight()}`
    );
  croppedImage = signal<CropperDialogResult | undefined>(undefined);
  imageSource = computed(() => {
    if(this.croppedImage()){
      return this.croppedImage()?.imageUrl;
    }
    return this.placeholder()
  });

  dialog = inject(MatDialog)
  fileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const dialogRef = this.dialog.open(CropperDialogComponent, {
        data: {
          image: file,
          width: this.imageWidth(),
          height: this.imageHeight(),
        },
        width: '500px',
      });
      dialogRef
        .afterClosed()
        .pipe(filter((result) => !!result))
        .subscribe((result) => {
          this.croppedImage.set(result);
        });
    }
  }

  @Output() imageReady = new EventEmitter<Blob>();
  constructor(){
    effect(() => {
      if(this.croppedImage()){
        this.imageReady.emit(this.croppedImage()?.blob)
      }
    })
  }
}
