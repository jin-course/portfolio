import { Injectable } from '@angular/core';

/** Smooth scrolling helpers shared by the header, hero and skills sections. */
@Injectable({ providedIn: 'root' })
export class ScrollService {
  toSection(id: string): void {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
