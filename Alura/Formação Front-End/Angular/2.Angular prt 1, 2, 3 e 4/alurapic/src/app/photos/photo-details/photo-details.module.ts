import { PhotoModule } from './../photo/photo.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoDetailComponent } from './photo-details.component';

@NgModule({
  declarations: [PhotoDetailComponent],
  imports: [CommonModule, PhotoModule],
  exports: [PhotoDetailComponent],
})
export class PhotosDetailsModule {}
