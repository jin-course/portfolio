import { Component, inject, signal } from '@angular/core';
import { TranslationService } from '../../services/translation';
import { ScrollService } from '../../services/scroll';

interface Skill {
  name: string;
  icon: string;
  highlight?: boolean;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  ts = inject(TranslationService);
  scroll = inject(ScrollService);

  /** Name of the icon whose hover animation is currently running (plays to the end, even if the mouse leaves). */
  bouncing = signal<string | null>(null);

  skills: Skill[] = [
    { name: 'HTML', icon: 'assets/icons/skills/html.svg' },
    { name: 'CSS', icon: 'assets/icons/skills/css.svg' },
    { name: 'JavaScript', icon: 'assets/icons/skills/javascript.svg' },
    { name: 'TypeScript', icon: 'assets/icons/skills/typescript.svg' },
    { name: 'Angular', icon: 'assets/icons/skills/angular.svg' },
    { name: 'Firebase', icon: 'assets/icons/skills/firebase.svg' },
    { name: 'Supabase', icon: 'assets/icons/skills/supabase.svg' },
    { name: 'Git', icon: 'assets/icons/skills/git.svg' },
    { name: 'skills.learning', icon: 'assets/icons/skills/continually-learning.svg', highlight: true },
  ];

  startBounce(name: string): void {
    if (this.bouncing() === null) {
      this.bouncing.set(name);
      // Safety net in case animationend never fires (e.g. reduced motion / background tab)
      setTimeout(() => this.endBounce(), 800);
    }
  }

  endBounce(): void {
    this.bouncing.set(null);
  }

  label(skill: Skill): string {
    return skill.highlight ? this.ts.t(skill.name) : skill.name;
  }
}
