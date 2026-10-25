import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { VENUE_FACILITIES } from '../../data/venue-content.data';
import { SkeletonLoader } from '../../shared/components/skeleton-loader/skeleton-loader';
import { ImageStateDirective } from '../../shared/directives/image-state';

@Component({
  selector: 'app-facilities',
  imports: [RouterLink, SkeletonLoader, ImageStateDirective],
  templateUrl: './facilities.html',
  styleUrl: './facilities.scss',
})
export class Facilities {
  readonly facilities = VENUE_FACILITIES;
}