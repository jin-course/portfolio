import { Injectable, effect, signal } from '@angular/core';

export type LegalPage = 'imprint' | 'privacy';

/** Which legal page is shown in the modal (null = closed). */
@Injectable({ providedIn: 'root' })
export class LegalService {
  open = signal<LegalPage | null>(null);

  constructor() {
    // lock the page behind the modal while it is open
    effect(() => {
      document.documentElement.style.overflow = this.open() ? 'hidden' : '';
    });
  }

  show(page: LegalPage, event: Event): void {
    event.preventDefault();
    this.open.set(page);
  }

  close(): void {
    this.open.set(null);
  }
}
