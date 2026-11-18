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

  /** Names of icons whose hover animation is currently running (each plays independently). */
  bouncing = signal<Set<string>>(new Set());
  private bounceTimers = new Map<string, ReturnType<typeof setTimeout>>();

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

  isBouncing(name: string): boolean {
    return this.bouncing().has(name);
  }

  startBounce(name: string): void {
    if (this.bouncing().has(name)) return;

    this.bouncing.update((set) => {
      const next = new Set(set);
      next.add(name);
      return next;
    });

    const prevTimer = this.bounceTimers.get(name);
    if (prevTimer) clearTimeout(prevTimer);

    // Safety net in case animationend never fires (e.g. reduced motion / background tab)
    this.bounceTimers.set(
      name,
      setTimeout(() => this.endBounce(name), 600),
    );
  }

  endBounce(name: string): void {
    const timer = this.bounceTimers.get(name);
    if (timer) {
      clearTimeout(timer);
      this.bounceTimers.delete(name);
    }

    if (!this.bouncing().has(name)) return;
    this.bouncing.update((set) => {
      const next = new Set(set);
      next.delete(name);
      return next;
    });
  }

  label(skill: Skill): string {
    return skill.highlight ? this.ts.t(skill.name) : skill.name;
  }
}
