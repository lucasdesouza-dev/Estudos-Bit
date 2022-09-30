import { ImmediateClickModule } from './../../shared/directives/immediate-click/immediate-click.module';
import { PhotoModule } from './../photo/photo.module';
import { VmessageModule } from './../../shared/components/vmessage/vmessage.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { PhotoFormComponent } from './photo-form.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PhotoFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    VmessageModule,
    RouterModule,
    PhotoModule,
    ImmediateClickModule,
  ],
})
export class PhotoFormModule {}
