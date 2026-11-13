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

  /**
   * Scroll position of every stop of the arrows:
   * hero, about, skills, portfolio (title + first project), the projects in between,
   * last project together with the testimonials, contact, footer.
   */
  private positions(): number[] {
    const header = 109;
    const screen = window.innerHeight;
    const maxScroll = document.documentElement.scrollHeight - screen;
    const top = (el: Element) => el.getBoundingClientRect().top + window.scrollY;
    const bottom = (el: Element) => el.getBoundingClientRect().bottom + window.scrollY;
    // puts an element in the middle of the area below the header
    const centered = (el: Element) =>
      top(el) - header - Math.max(0, (screen - header - el.getBoundingClientRect().height) / 2);

    const stops: number[] = [];
    for (const id of ['hero', 'about-me', 'skills', 'portfolio']) {
      const section = document.getElementById(id);
      if (section) stops.push(top(section));
    }

    const cards = Array.from(document.querySelectorAll('.project-card'));
    const lastCard = cards[cards.length - 1];
    const testimonials = document.getElementById('testimonials');

    // projects between the first (shown with the "Portfolio" title) and the last one
    cards.slice(1, -1).forEach((card) => stops.push(centered(card)));

    if (lastCard && testimonials) {
      // if the last project and the testimonials do not fit on one screen, the project gets its own stop
      const fitsTogether = bottom(testimonials) - top(lastCard) <= screen - header;
      if (!fitsTogether && cards.length > 1) stops.push(centered(lastCard));
      // testimonials at the bottom of the screen, the last project above them
      stops.push(bottom(testimonials) - screen);
    }

    const contact = document.getElementById('contact');
    if (contact) stops.push(top(contact));
    stops.push(maxScroll); // footer

    return stops.map((y) => Math.round(Math.min(Math.max(y, 0), maxScroll)));
  }
}
