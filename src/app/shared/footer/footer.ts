import { Component, inject } from '@angular/core';
import { TranslationService } from '../../services/translation';
import { LegalService } from '../../services/legal';
import { ScrollService } from '../../services/scroll';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  ts = inject(TranslationService);
  legal = inject(LegalService);
  scroll = inject(ScrollService);
  year = new Date().getFullYear();
}
