import { Component, inject, signal } from '@angular/core';
import { TranslationService } from '../../services/translation';

interface TestimonialItem {
  quoteKey: string;
  authorKey: string;
  avatar: string;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.scss'
})
export class Testimonials {
  ts = inject(TranslationService);
  currentIndex = signal(0);

  testimonials: TestimonialItem[] = [
    {
      quoteKey: 'testimonials.1.quote',
      authorKey: 'testimonials.1.author',
      avatar: 'assets/img/profile/about-profile.webp'
    },
    {
      quoteKey: 'testimonials.2.quote',
      authorKey: 'testimonials.2.author',
      avatar: 'assets/img/profile/about-profile.webp'
    },
    {
      quoteKey: 'testimonials.3.quote',
      authorKey: 'testimonials.3.author',
      avatar: 'assets/img/profile/about-profile.webp'
    }
  ];

  prev(): void {
    const len = this.testimonials.length;
    this.currentIndex.update((i) => (i - 1 + len) % len);
  }

  next(): void {
    const len = this.testimonials.length;
    this.currentIndex.update((i) => (i + 1) % len);
  }

  select(index: number): void {
    this.currentIndex.set(index);
  }
}