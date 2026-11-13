import { Component, HostListener, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { TranslationService, Lang } from '../../services/translation';
import { ScrollService } from '../../services/scroll';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  ts = inject(TranslationService);
  private router = inject(Router);
  private scroll = inject(ScrollService);
  menuOpen = signal(false);

  /** Section the visitor is currently looking at (its menu link is highlighted). */
  activeSection = signal<string | null>(null);

  @HostListener('window:scroll')
  updateActiveSection(): void {
    const marker = window.innerHeight * 0.4; // a section counts as active once it reaches the upper part of the screen
    let active: string | null = null;
    for (const id of ['about-me', 'skills', 'portfolio', 'testimonials', 'contact']) {
      const el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top <= marker) active = id;
    }
    this.activeSection.set(active);
  }

  switchLang(lang: Lang): void {
    this.ts.setLang(lang);
  }

  toggleMenu(): void {
    this.menuOpen.update((v) => !v);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }

  navigateToSection(sectionId: string): void {
    this.closeMenu();
    if (this.router.url !== '/') {
      this.router.navigate(['/']).then(() => {
        setTimeout(() => this.scroll.toSection(sectionId), 100);
      });
    } else {
      this.scroll.toSection(sectionId);
    }
  }

  goHome(): void {
    this.closeMenu();
    if (this.router.url === '/' || this.router.url.startsWith('/#')) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      this.router.navigate(['/']).then(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  }
}