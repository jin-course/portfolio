import { Component, inject } from '@angular/core';
import { TranslationService } from '../../services/translation';

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

  skills: Skill[] = [
    { name: 'HTML', icon: 'assets/icons/skills/html.svg' },
    { name: 'CSS', icon: 'assets/icons/skills/css.svg' },
    { name: 'JavaScript', icon: 'assets/icons/skills/javascript.svg' },
    { name: 'TypeScript', icon: 'assets/icons/skills/typescript.svg' },
    { name: 'Angular', icon: 'assets/icons/skills/angular.svg' },
    { name: 'Supabase', icon: 'assets/icons/skills/supabase.svg' },
    { name: 'Git', icon: 'assets/icons/skills/git.svg' },
    { name: 'REST-API', icon: 'assets/icons/skills/api.svg' },
    { name: 'Scrum', icon: 'assets/icons/skills/scrum.svg' },
    { name: 'Material Design', icon: 'assets/icons/skills/material-design.svg' },
    { name: 'skills.learning', icon: 'assets/icons/skills/continually-learning.svg', highlight: true },
  ];

  label(skill: Skill): string {
    return skill.highlight ? this.ts.t(skill.name) : skill.name;
  }

  scrollToContact(): void {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  }
}
