import { Component, inject } from '@angular/core';
import { TranslationService } from '../../services/translation';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.html',
  styleUrl: './about-me.scss'
})
export class AboutMe {
  ts = inject(TranslationService);
}