import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';

interface GalleryImage {
  src: string;
  title: string;
  category: string;
  alt: string;
  featured?: boolean;
}

@Component({
  selector: 'app-gallery',
  imports: [RouterLink],
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

  activeCategory = 'All';
  selectedImage: GalleryImage | null = null;


  readonly images: GalleryImage[] = [
    {
      src: '/images/gallery/wedding.jpg',
      title: 'A Beautiful Celebration',
      category: 'Wedding',
      alt: 'Wedding celebration setup',
      featured: true,
    },
    {
      src: '/images/gallery/decoration.jpg',
      title: 'Elegant Table Setting',
      category: 'Decoration',
      alt: 'Elegant wedding decoration',
    },
    {
      src: '/images/gallery/banquet.jpg',
      title: 'The Grand Venue',
      category: 'Banquet',
      alt: 'Banquet hall interior',
    },
    {
      src: '/images/gallery/floral-stage.jpg',
      title: 'Floral Stage',
      category: 'Decoration',
      alt: 'Floral wedding stage decoration',
    },
    {
      src: '/images/gallery/reception.jpg',
      title: 'An Evening to Remember',
      category: 'Reception',
      alt: 'Wedding reception setup',
      featured: true,
    },
    {
      src: '/images/gallery/wedding-table.jpg',
      title: 'Celebration in Style',
      category: 'Wedding',
      alt: 'Wedding table setting',
    },
    {
      src: '/images/gallery/celebration.jpg',
      title: 'Beautiful Moments',
      category: 'Reception',
      alt: 'Wedding celebration ambience',
    },
    {
      src: '/images/gallery/event-setup.jpg',
      title: 'Made for Memories',
      category: 'Banquet',
      alt: 'Venue arranged for an event',
    },
    {
      src: '/images/gallery/decoration1.jpg',
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
