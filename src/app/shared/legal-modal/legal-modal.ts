import { Component, ElementRef, inject, viewChild } from '@angular/core';
import { LegalService } from '../../services/legal';
import { Imprint } from '../../pages/imprint/imprint';
import { PrivacyPolicy } from '../../pages/privacy-policy/privacy-policy';

/** Legal Notice / Privacy Policy as a modal. It can only be closed with the X button. */
@Component({
  selector: 'app-legal-modal',
  standalone: true,
  imports: [Imprint, PrivacyPolicy],
  templateUrl: './legal-modal.html',
  styleUrl: './legal-modal.scss',
})
export class LegalModal {
  legal = inject(LegalService);
  private content = viewChild<ElementRef<HTMLElement>>('content');

  /** Scrolls the text inside the modal (direction: -1 = up, 1 = down). */
  scroll(direction: -1 | 1): void {
    const el = this.content()?.nativeElement;
    el?.scrollBy({ top: direction * el.clientHeight * 0.8, behavior: 'smooth' });
  }
}
