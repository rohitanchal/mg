import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';
import { OptimizedImage, responsiveImage } from '../../core/models/venue.model';
import { SkeletonLoader } from '../../shared/components/skeleton-loader/skeleton-loader';
import { ImageStateDirective } from '../../shared/directives/image-state';

interface GalleryImage extends OptimizedImage {
  previewSrc: string;
  title: string;
  category: string;
  alt: string;
  featured?: boolean;
}

@Component({
  selector: 'app-gallery',
  imports: [RouterLink, SkeletonLoader, ImageStateDirective],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss',
})
export class Gallery {
  readonly categories = [
    'All',
    'Wedding',
    'Decoration',
    'Banquet',
    'Reception',
  ];

  readonly imageSizes = '(min-width: 992px) 33vw, 50vw';

  activeCategory = 'All';
  selectedImage: GalleryImage | null = null;

  readonly images: GalleryImage[] = [
    {
      ...responsiveImage('/images/gallery/wedding', [
        { width: 640, height: 426 },
        { width: 1280, height: 854 },
      ]),
      previewSrc: '/images/gallery/wedding-1400.webp',
      title: 'A Beautiful Celebration',
      category: 'Wedding',
      alt: 'Wedding celebration setup',
      featured: true,
    },
    {
      ...responsiveImage('/images/gallery/decoration', [
        { width: 640, height: 426 },
        { width: 1024, height: 682 },
      ]),
      previewSrc: '/images/gallery/decoration-1024.webp',
      title: 'Elegant Table Setting',
      category: 'Decoration',
      alt: 'Elegant wedding decoration',
    },
    {
      ...responsiveImage('/images/gallery/banquet', [
        { width: 640, height: 414 },
        { width: 900, height: 582 },
      ]),
      previewSrc: '/images/gallery/banquet-900.webp',
      title: 'The Grand Venue',
      category: 'Banquet',
      alt: 'Banquet hall interior',
    },
    {
      ...responsiveImage('/images/gallery/floral-stage', [
        { width: 640, height: 424 },
        { width: 1280, height: 848 },
      ]),
      previewSrc: '/images/gallery/floral-stage-1600.webp',
      title: 'Floral Stage',
      category: 'Decoration',
      alt: 'Floral wedding stage decoration',
    },
    {
      ...responsiveImage('/images/gallery/reception', [
        { width: 640, height: 426 },
        { width: 900, height: 600 },
      ]),
      previewSrc: '/images/gallery/reception-900.webp',
      title: 'An Evening to Remember',
      category: 'Reception',
      alt: 'Wedding reception setup',
      featured: true,
    },
    {
      ...responsiveImage('/images/gallery/wedding-table', [
        { width: 640, height: 426 },
        { width: 1280, height: 854 },
      ]),
      previewSrc: '/images/gallery/wedding-table-1536.webp',
      title: 'Celebration in Style',
      category: 'Wedding',
      alt: 'Wedding table setting',
    },
    {
      ...responsiveImage('/images/gallery/celebration', [
        { width: 640, height: 428 },
        { width: 1280, height: 854 },
      ]),
      previewSrc: '/images/gallery/celebration-1600.webp',
      title: 'Beautiful Moments',
      category: 'Reception',
      alt: 'Wedding celebration ambience',
    },
    {
      ...responsiveImage('/images/gallery/event-setup', [
        { width: 640, height: 426 },
        { width: 1280, height: 854 },
      ]),
      previewSrc: '/images/gallery/event-setup-1600.webp',
      title: 'Made for Memories',
      category: 'Banquet',
      alt: 'Venue arranged for an event',
    },
    {
      ...responsiveImage('/images/gallery/decoration1', [
        { width: 640, height: 426 },
        { width: 1024, height: 682 },
      ]),
      previewSrc: '/images/gallery/decoration1-1024.webp',
      title: 'Beautifully Decorated',
      category: 'Decoration',
      alt: 'Decorative setup for a celebration',
    },
  ];

  get filteredImages(): GalleryImage[] {
    if (this.activeCategory === 'All') {
      return this.images;
    }

    return this.images.filter(
      (image) => image.category === this.activeCategory,
    );
  }

  selectCategory(category: string): void {
    this.activeCategory = category;
  }

  openImage(image: GalleryImage): void {
    this.selectedImage = image;
  }

  closeImage(): void {
    this.selectedImage = null;
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.closeImage();
  }
}
