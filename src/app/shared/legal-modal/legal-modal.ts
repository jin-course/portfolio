import { Component, inject } from '@angular/core';
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
}
