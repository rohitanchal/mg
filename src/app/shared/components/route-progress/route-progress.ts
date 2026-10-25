import { Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
} from '@angular/router';

@Component({
  selector: 'app-route-progress',
  templateUrl: './route-progress.html',
  styleUrl: './route-progress.scss',
})
export class RouteProgress {
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);
  private readonly showDelayMs = 150;
  private showTimer: ReturnType<typeof setTimeout> | null = null;

  protected visible = false;
  protected errorMessage = '';

  constructor() {
    this.router.events.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.errorMessage = '';
        this.clearShowTimer();
        this.showTimer = setTimeout(() => {
          this.visible = true;
        }, this.showDelayMs);
        return;
      }

      if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError
      ) {
        this.clearShowTimer();
        this.visible = false;
      }

      if (event instanceof NavigationError) {
        const reason = event.error;
        const detail = reason instanceof Error ? reason.message : String(reason ?? 'Unknown navigation error');
        this.errorMessage = detail;
      }
    });

    this.destroyRef.onDestroy(() => this.clearShowTimer());
  }

  private clearShowTimer(): void {
    if (this.showTimer !== null) {
      clearTimeout(this.showTimer);
      this.showTimer = null;
    }
  }
}
