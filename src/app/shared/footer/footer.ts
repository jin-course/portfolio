import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslationService } from '../../services/translation';
import { LegalService } from '../../services/legal';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  ts = inject(TranslationService);
  legal = inject(LegalService);
  year = new Date().getFullYear();
}
