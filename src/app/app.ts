import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './shared/header/header';
import { Footer } from './shared/footer/footer';
import { LegalModal } from './shared/legal-modal/legal-modal';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header, Footer, LegalModal],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}