import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { INTRO_IMAGE } from '../../data/venue-content.data';
import { SkeletonLoader } from '../../shared/components/skeleton-loader/skeleton-loader';
import { ImageStateDirective } from '../../shared/directives/image-state';

@Component({
  imports: [RouterLink, SkeletonLoader, ImageStateDirective],
  selector: 'app-about',
  styleUrl: './about.scss',
  templateUrl: './about.html',
})
export class About {
  readonly venueImage = INTRO_IMAGE;
}
