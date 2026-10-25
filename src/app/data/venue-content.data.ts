import { responsiveImage, VenueFacility } from '../core/models/venue.model';

export const VENUE_FACILITIES: VenueFacility[] = [
  {
    title: 'Spacious Banquet Hall',
    description: 'Explore a welcoming setting for weddings and special celebrations.',
    icon: 'bi-building',
    image: responsiveImage('/images/facilities/banquet-hall', [
      { width: 640, height: 400 },
      { width: 1280, height: 800 },
    ]),
  },
  {
    title: 'Catering Services',
    description: 'Discover dining arrangements for your special occasions.',
    icon: 'bi-cup-hot',
    image: responsiveImage('/images/facilities/catering', [
      { width: 640, height: 426 },
      { width: 1280, height: 852 },
    ]),
  },
  {
    title: 'Event Decoration',
    description: 'Get inspired by beautiful setups for memorable celebrations.',
    icon: 'bi-flower1',
    image: responsiveImage('/images/facilities/decoration', [
      { width: 640, height: 360 },
      { width: 1280, height: 718 },
    ]),
  },
  {
    title: 'Lighting & Ambience',
    description: 'Explore lighting ideas that create a welcoming atmosphere.',
    icon: 'bi-stars',
    image: responsiveImage('/images/facilities/lighting', [
      { width: 640, height: 426 },
      { width: 1280, height: 854 },
    ]),
  },
  {
    title: 'Ample Parking',
    description: 'Convenient parking arrangements for your guests.',
    icon: 'bi-car-front',
    image: responsiveImage('/images/facilities/parking', [
      { width: 640, height: 360 },
      { width: 1280, height: 720 },
    ]),
  },
  {
    title: 'Air-Conditioned Comfort',
    description: 'A comfortable indoor environment for your guests.',
    icon: 'bi-snow',
    image: responsiveImage('/images/facilities/air-conditioned-hall', [
      { width: 640, height: 426 },
      { width: 1200, height: 800 },
    ]),
  },
  {
    title: 'Guest Seating',
    description: 'Seating arrangements for family and friends.',
    icon: 'bi-people',
    image: responsiveImage('/images/facilities/guest-seating', [
      { width: 640, height: 426 },
      { width: 1200, height: 800 },
    ]),
  },
  {
    title: 'Event Assistance',
    description: 'Support to help coordinate your event at the venue.',
    icon: 'bi-calendar-check',
    image: responsiveImage('/images/facilities/event-assistance', [
      { width: 640, height: 438 },
      { width: 1213, height: 832 },
    ]),
  },
];

export const INTRO_IMAGE = responsiveImage('/images/hero/hero', [
  { width: 640, height: 426 },
  { width: 1280, height: 854 },
]);

export const HERO_IMAGE = responsiveImage('/images/hero/hero2', [
  { width: 640, height: 426 },
  { width: 1280, height: 854 },
  { width: 1920, height: 1280 },
]);
