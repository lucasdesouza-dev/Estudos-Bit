import { Directive, ElementRef, OnInit } from '@angular/core';
import { PlataformDetectorService } from 'src/app/core/plaraform-detector/plataform-detector.service';

@Directive({
  selector: '[ImmediateClick]',
})
export class ImmediatClickDirective implements OnInit {
  constructor(
    private element: ElementRef<any>,
    private plataformDetectorService: PlataformDetectorService
  ) {}
  ngOnInit(): void {
    this.plataformDetectorService.isPlatformBrowser() &&
      this.element.nativeElement.click();
  }
}
