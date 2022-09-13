import { NgModule } from '@angular/core';

import { PhotoModule } from './photo/photo.module';
import { PhotoFormModule } from './photo-form/photo-form.module';
import { PhotoListModule } from './photo-list/photos-list.module';

@NgModule({
  imports: [PhotoModule, PhotoFormModule, PhotoListModule],
})
export class PhotosModule {}
