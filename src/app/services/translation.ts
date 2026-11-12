import { Injectable, signal } from '@angular/core';

export type Lang = 'en' | 'de';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  currentLang = signal<Lang>((localStorage.getItem('lang') as Lang) || 'en');

  private translations: Record<Lang, Record<string, string>> = {
    en: {
      'nav.about': 'About me',
      'nav.skills': 'Skills',
      'nav.portfolio': 'Portfolio',
      'hero.iam': 'I am',
      'hero.role': 'FRONTEND DEVELOPER',
      'hero.cta': "Let's talk!",
      'hero.scroll': 'Scroll down',
      'about.title': 'About me',
      'about.intro': 'Hi, I am a Frontend Developer based in Münster, Germany. With an IT degree and 16 years of experience in reliable medical logistics, I bring strong discipline, problem-solving skills, and a passion for building clean, user-friendly web applications.',
      'about.point1': 'Based in Münster, Germany — open to remote work across Germany or local opportunities.',
      'about.point2': 'Continuous learner who enjoys turning complex ideas into structured, responsive interfaces.',
      'about.point3': 'Analytical problem-solver with a focus on clean code, maintainability, and teamwork.',
    },
    de: {
      'nav.about': 'Über mich',
      'nav.skills': 'Skills',
      'nav.portfolio': 'Portfolio',
      'hero.iam': 'Ich bin',
      'hero.role': 'FRONTEND ENTWICKLER',
      'hero.cta': 'Kontaktieren!',
      'hero.scroll': 'Runterscrollen',
      'about.title': 'Über mich',
      'about.intro': 'Hallo, ich bin Frontend-Entwickler aus Münster. Mit meinem IT-Studium und 16 Jahren Erfahrung in der zuverlässigen medizinischen Logistik verbinde ich hohe Disziplin, strukturiertes Denken und Begeisterung für moderne Webentwicklung.',
      'about.point1': 'Ansässig in Münster — offen für Remote-Arbeit in ganz Deutschland sowie Vor-Ort-Möglichkeiten.',
      'about.point2': 'Lernbegeistert und motiviert, komplexe Ideen in klare, responsive Benutzeroberflächen umzusetzen.',
      'about.point3': 'Analytischer Problemlöser mit Fokus auf sauberen Code, Wartbarkeit und Teamarbeit.',
    }
  };

  setLang(lang: Lang): void {
    this.currentLang.set(lang);
    localStorage.setItem('lang', lang);
  }

  t(key: string): string {
    return this.translations[this.currentLang()][key] || key;
  }
}