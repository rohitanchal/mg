import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouteProgress } from './shared/components/route-progress/route-progress';

@Component({
  imports: [RouterOutlet, RouteProgress],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('marriage-hall-website');
}
