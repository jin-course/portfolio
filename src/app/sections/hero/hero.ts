import { Component, inject } from '@angular/core';
import { TranslationService } from '../../services/translation';
import { ScrollService } from '../../services/scroll';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class Hero {
  ts = inject(TranslationService);
  scroll = inject(ScrollService);
}