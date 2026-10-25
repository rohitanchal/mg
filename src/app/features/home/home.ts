import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { VENUE_FACILITIES } from '../../data/venue-content.data';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  readonly facilities = VENUE_FACILITIES;

  readonly featuredFacilities = VENUE_FACILITIES
    .filter((facility) => facility.image)
    .slice(0, 4);
}