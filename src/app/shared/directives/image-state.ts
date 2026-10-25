import {
  AfterViewInit,
  ChangeDetectorRef,
  Directive,
  ElementRef,
  HostListener,
  inject,
} from '@angular/core';

@Directive({
  selector: 'img[appImageState]',
  exportAs: 'imageState',
})
export class ImageStateDirective implements AfterViewInit {
  private readonly image = inject<ElementRef<HTMLImageElement>>(ElementRef);
  private readonly changeDetector = inject(ChangeDetectorRef);

  ready = false;
  failed = false;

  @HostListener('load')
  onLoad(): void {
    const element = this.image.nativeElement;
    this.failed = element.naturalWidth === 0;
    this.ready = !this.failed;
  }

  @HostListener('error')
  onError(): void {
    this.ready = false;
    this.failed = true;
  }

  ngAfterViewInit(): void {
    queueMicrotask(() => {
      if (this.ready || this.failed) {
        return;
      }

      const element = this.image.nativeElement;
      if (!element.complete || (!element.currentSrc && !element.src)) {
        return;
      }

      this.failed = element.naturalWidth === 0;
      this.ready = !this.failed;
      this.changeDetector.detectChanges();
    });
  }
}
