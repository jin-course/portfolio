import { Component, inject } from '@angular/core';
import { TranslationService } from '../../services/translation';

@Component({
  selector: 'app-imprint',
  standalone: true,
  templateUrl: './imprint.html',
  styleUrl: './imprint.scss',
})
export class Imprint {
  ts = inject(TranslationService);
}
