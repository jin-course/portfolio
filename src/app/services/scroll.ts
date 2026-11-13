import { Injectable } from '@angular/core';

/** Smooth scrolling helpers shared by the header, hero, skills and contact sections. */
@Injectable({ providedIn: 'root' })
export class ScrollService {
  toSection(id: string): void {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }

  toTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
