import { Component, inject, signal } from '@angular/core';
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
}