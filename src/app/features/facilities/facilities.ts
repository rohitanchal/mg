import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { VENUE_FACILITIES } from '../../data/venue-content.data';

@Component({
  selector: 'app-facilities',
  imports: [RouterLink],
  templateUrl: './facilities.html',
  styleUrl: './facilities.scss',
})
export class Facilities {
  readonly facilities = VENUE_FACILITIES;
}