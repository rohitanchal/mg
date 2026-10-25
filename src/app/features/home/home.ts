import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { OptimizedImage, VenueFacility } from '../../core/models/venue.model';
import { HERO_IMAGE, INTRO_IMAGE, VENUE_FACILITIES } from '../../data/venue-content.data';
import { SkeletonLoader } from '../../shared/components/skeleton-loader/skeleton-loader';
import { ImageStateDirective } from '../../shared/directives/image-state';

@Component({
  selector: 'app-home',
  imports: [RouterLink, SkeletonLoader, ImageStateDirective],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  readonly heroImage = HERO_IMAGE;
  readonly introImage = INTRO_IMAGE;

  readonly featuredFacilities = VENUE_FACILITIES
    .filter((facility): facility is VenueFacility & { image: OptimizedImage } => !!facility.image)
    .slice(0, 4);
}