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
      'about.location': 'Based in Münster, Germany — open to remote work across Germany or local opportunities.',
      'about.mindset': 'Continuous learner who enjoys turning complex ideas into structured, responsive interfaces.',
      'about.problem': 'Analytical problem-solver with a focus on clean code, maintainability, and teamwork.',
      'skills.title': 'My skills',
      'skills.intro': 'I work with a broad range of front-end technologies and apply them in my projects.',
      'skills.more.title': 'Looking for another skill?',
      'skills.more.text': 'I enjoy learning new technologies and frameworks and keep growing with every project.',
      'skills.cta': 'Get in touch',
      'skills.learning': 'Continually learning',
      'contact.title': 'Contact',
      'contact.heading': 'Got a problem to solve?',
      'contact.text': 'Need a Frontend developer? Tell me which role you are interested in and how I can add value to your projects through my work.',
      'contact.cta': 'Contact me!',
      'contact.name': 'Your name',
      'contact.email': 'Your email',
      'contact.message': 'Your message',
      'contact.privacy.pre': "I've read the",
      'contact.privacy.link': 'privacy policy',
      'contact.privacy.post': 'and agree to the processing of my data as outlined.',
      'contact.send': 'Send message :)',
      'contact.err.name': 'Your name is required',
      'contact.err.email': 'Your email is required',
      'contact.err.message': 'Your message is empty',
      'contact.err.privacy': 'Please accept the privacy policy',
      'contact.sent': 'Thank you! Your mail app has been opened with your message.',
      'footer.legal': 'Legal Notice',
      'portfolio.title': 'Portfolio',
      'portfolio.subtitle': 'Explore a selection of my work here — interact with projects to see my skills in action.',
      'portfolio.pollo.desc': 'Jump, run and throw game based on an object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      'portfolio.pokedex.desc': 'Based on the PokéAPI a simple library that provides and catalogues pokemon information with search, filter and detailed stats.',
      'portfolio.travel.desc': 'A responsive multi-destination travel blog created in an international team, showcasing cultural highlights and travel tips across Korea, India, and Germany.',
      'testimonials.1.quote': 'Working with Jinsoo on our international travel blog project was a great experience. He structured our frontend code cleanly, solved responsive layout challenges quickly, and always kept the team well-organized.',
      'testimonials.1.author': 'Neelima K. — Team Partner',
      'testimonials.2.quote': 'Jinsoo brings remarkable discipline and problem-solving focus to every task. His ability to turn complex requirements into clean, maintainable components made our collaboration smooth and reliable.',
      'testimonials.2.author': 'Patrick M. — Team Partner',
      'testimonials.3.quote': 'Jinsoo demonstrates strong analytical thinking and genuine passion for modern web development. He consistently delivers well-structured code and proactively improves user experience.',
      'testimonials.3.author': 'Junus E. — Course Instructor',
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
      'about.location': 'Ansässig in Münster — offen für Remote-Arbeit in ganz Deutschland sowie Vor-Ort-Möglichkeiten.',
      'about.mindset': 'Lernbegeistert und motiviert, komplexe Ideen in klare, responsive Benutzeroberflächen umzusetzen.',
      'about.problem': 'Analytischer Problemlöser mit Fokus auf sauberen Code, Wartbarkeit und Teamarbeit.',
      'skills.title': 'Meine Skills',
      'skills.intro': 'Ich arbeite mit einer breiten Palette an Frontend-Technologien und setze sie in meinen Projekten ein.',
      'skills.more.title': 'Fehlt ein Skill?',
      'skills.more.text': 'Ich lerne gerne neue Technologien und Frameworks und wachse mit jedem Projekt.',
      'skills.cta': 'Kontakt aufnehmen',
      'skills.learning': 'Ständig am Lernen',
      'contact.title': 'Kontakt',
      'contact.heading': 'Ein Problem zu lösen?',
      'contact.text': 'Sie suchen einen Frontend-Entwickler? Schreiben Sie mir, welche Rolle Sie besetzen möchten und wie ich Ihre Projekte voranbringen kann.',
      'contact.cta': 'Kontaktieren Sie mich!',
      'contact.name': 'Ihr Name',
      'contact.email': 'Ihre E-Mail',
      'contact.message': 'Ihre Nachricht',
      'contact.privacy.pre': 'Ich habe die',
      'contact.privacy.link': 'Datenschutzerklärung',
      'contact.privacy.post': 'gelesen und stimme der Verarbeitung meiner Daten zu.',
      'contact.send': 'Nachricht senden :)',
      'contact.err.name': 'Bitte geben Sie Ihren Namen ein',
      'contact.err.email': 'Bitte geben Sie eine gültige E-Mail-Adresse ein',
      'contact.err.message': 'Bitte geben Sie eine Nachricht ein (mind. 10 Zeichen)',
      'contact.err.privacy': 'Bitte akzeptieren Sie die Datenschutzerklärung',
      'contact.sent': 'Vielen Dank! Ihr Mailprogramm wurde mit Ihrer Nachricht geöffnet.',
      'footer.legal': 'Impressum',
      'portfolio.title': 'Portfolio',
      'portfolio.subtitle': 'Entdecken Sie hier eine Auswahl meiner Arbeiten — testen Sie die Projekte direkt in der Praxis.',
      'portfolio.pollo.desc': 'Jump-and-Run-Spiel basierend auf einem objektorientierten Ansatz. Hilf Pepe, Münzen und Tabasco-Salsa zu sammeln, um gegen das verrückte Huhn zu kämpfen.',
      'portfolio.pokedex.desc': 'Eine auf der PokéAPI basierende Web-App, die Pokémon-Informationen übersichtlich mit Suchfunktion und Detailwerten katalogisiert.',
      'portfolio.travel.desc': 'Ein responsiver Reiseblog, entwickelt in einem internationalen Team, der kulturelle Highlights und Reisetipps aus Korea, Indien und Deutschland präsentiert.',
      'testimonials.1.quote': 'Die Zusammenarbeit mit Jinsoo an unserem internationalen Reiseblog-Projekt war großartig. Er hat den Frontend-Code sauber strukturiert, responsive Layout-Probleme schnell gelöst und das Team stets gut organisiert.',
      'testimonials.1.author': 'Neelima K. — Team-Partnerin',
      'testimonials.2.quote': 'Jinsoo bringt eine bemerkenswerte Disziplin und Lösungsorientierung in jede Aufgabe ein. Seine Fähigkeit, komplexe Anforderungen in saubere Komponenten umzusetzen, machte unsere Zusammenarbeit sehr zuverlässig.',
      'testimonials.2.author': 'Patrick M. — Team-Partner',
      'testimonials.3.quote': 'Jinsoo zeigt starkes analytisches Denken und echte Begeisterung für moderne Webentwicklung. Er liefert durchgehend gut strukturierten Code und verbessert proaktiv die Benutzerfreundlichkeit.',
      'testimonials.3.author': 'Junus E. — Kursleiter',
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