import { VmessageModule } from './../../shared/components/vmessage/vmessage.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PhotoModule } from './../photo/photo.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoDetailComponent } from './photo-details.component';
import { PhotoCommentsComponent } from './photo-comments/photo-comments.component';

@NgModule({
  declarations: [PhotoDetailComponent, PhotoCommentsComponent],
  imports: [
    CommonModule,
    PhotoModule,
    RouterModule,
    ReactiveFormsModule,
    VmessageModule,
  ],
  exports: [PhotoDetailComponent, PhotoCommentsComponent],
})
export class PhotosDetailsModule {}
