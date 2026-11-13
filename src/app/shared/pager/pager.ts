import { Component, HostListener, OnInit, signal } from '@angular/core';

/** Round up/down arrows (bottom right) that jump from page to page. On the landing page only phones show it (down arrow). */
@Component({
  selector: 'app-pager',
  standalone: true,
  templateUrl: './pager.html',
  styleUrl: './pager.scss',
})
export class Pager implements OnInit {
  visible = signal(false);
  onHero = signal(true);
  atEnd = signal(false);

  ngOnInit(): void {
    this.update();
  }

  @HostListener('window:scroll')
  @HostListener('window:resize')
  update(): void {
    const positions = this.positions();
    const onHero = window.scrollY <= window.innerHeight * 0.5;
    const isPhone = window.innerWidth <= 768;
    this.onHero.set(onHero);
    // on phones the arrows only help above the Portfolio section; from there on the page is short enough
    const portfolioTop = document.getElementById('portfolio')?.getBoundingClientRect().top ?? Infinity;
    const inLowerPart = portfolioTop <= window.innerHeight * 0.5;
    this.visible.set(isPhone ? !inLowerPart : !onHero);
    this.atEnd.set(!positions.some((y) => y > window.scrollY + 5));
  }

  next(): void {
    const target = this.positions().find((y) => y > window.scrollY + 5);
    if (target !== undefined) window.scrollTo({ top: target, behavior: 'smooth' });
  }

  previous(): void {
    const target = this.positions().filter((y) => y < window.scrollY - 5).pop();
    window.scrollTo({ top: target ?? 0, behavior: 'smooth' });
  }

  /** Scroll position of every "page": each section, and each project card on its own. */
  private positions(): number[] {
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const pages: { el: Element; center: boolean }[] = [
      ...['hero', 'about-me', 'skills', 'portfolio'].map((id) => ({ el: document.getElementById(id)!, center: false })),
      // the first project is already shown with the "Portfolio" title (same position as the header link)
      ...Array.from(document.querySelectorAll('.project-card')).slice(1).map((el) => ({ el, center: true })),
      ...['testimonials', 'contact'].map((id) => ({ el: document.getElementById(id)!, center: false })),
    ];

    const sections = pages
      .filter((page) => page.el)
      .map(({ el, center }) => {
        const top = el.getBoundingClientRect().top + window.scrollY;
        const y = center ? top - (window.innerHeight - el.getBoundingClientRect().height) / 2 : top;
        return Math.round(Math.min(Math.max(y, 0), maxScroll));
      });
    // the footer is the last stop: the very bottom of the page
    return [...sections, Math.round(maxScroll)];
  }
}
