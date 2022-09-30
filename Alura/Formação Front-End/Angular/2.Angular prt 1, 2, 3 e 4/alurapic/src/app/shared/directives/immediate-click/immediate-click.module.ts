import { ImmediatClickDirective } from './immediate-click.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ImmediatClickDirective],
  exports: [ImmediatClickDirective],
  imports: [CommonModule],
})
export class ImmediateClickModule {}
