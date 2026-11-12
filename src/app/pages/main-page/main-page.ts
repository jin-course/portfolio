import { Component } from '@angular/core';
import { Hero } from '../../sections/hero/hero';
import { AboutMe } from '../../sections/about-me/about-me';
import { Skills } from '../../sections/skills/skills';
import { Portfolio } from '../../sections/portfolio/portfolio';
import { Testimonials } from '../../sections/testimonials/testimonials';
import { Contact } from '../../sections/contact/contact';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    Hero,
    AboutMe,
    Skills,
    Portfolio,
    Testimonials,
    Contact
  ],
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss'
})
export class MainPage {}