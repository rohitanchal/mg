import { Component, Input } from '@angular/core';

export type SkeletonVariant = 'image' | 'text' | 'card' | 'gallery-card';

@Component({
  selector: 'app-skeleton-loader',
  templateUrl: './skeleton-loader.html',
  styleUrl: './skeleton-loader.scss',
  host: {
    'aria-hidden': 'true',
  },
})
export class SkeletonLoader {
  @Input() variant: SkeletonVariant = 'image';
  @Input() count = 1;

  get slots(): number[] {
    const total = Number.isFinite(this.count) ? Math.floor(this.count) : 1;
    return Array.from({ length: Math.max(1, total) }, (_, index) => index);
  }

  lineWidth(index: number): string {
    const widths = ['100%', '94%', '72%'];
    return widths[index % widths.length];
  }
}
