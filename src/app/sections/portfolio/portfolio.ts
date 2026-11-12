import { Component, inject } from '@angular/core';
import { TranslationService } from '../../services/translation';

interface ProjectItem {
  title: string;
  techStack: string;
  descKey: string;
  image: string;
  liveUrl: string;
  githubUrl: string;
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss'
})
export class Portfolio {
  ts = inject(TranslationService);

  projects: ProjectItem[] = [
    {
      title: 'El Pollo Loco',
      techStack: 'JavaScript | HTML | CSS',
      descKey: 'portfolio.pollo.desc',
      image: 'assets/img/projects/el-pollo-loco.png',
      liveUrl: 'https://jinsoojang-da.github.io/el-pollo-loco/',
      githubUrl: 'https://github.com/JinSooJang-DA/el-pollo-loco'
    },
    {
      title: 'Pokedex',
      techStack: 'JavaScript | HTML | CSS | REST-API',
      descKey: 'portfolio.pokedex.desc',
      image: 'assets/img/projects/pokedex.png',
      liveUrl: 'https://jinsoojang-da.github.io/pokedex/',
      githubUrl: 'https://github.com/JinSooJang-DA/pokedex'
    },
    {
      title: 'Koreandiner',
      techStack: 'HTML | CSS | JavaScript',
      descKey: 'portfolio.food order app.desc',
      image: 'assets/img/projects/koreandiner.png',
      liveUrl: 'https://jinsoojang-da.github.io/koreandiner/',
      githubUrl: 'https://github.com/JinSooJang-DA/koreandiner'
    }
  ];
}