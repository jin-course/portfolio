import { Component, inject } from '@angular/core';
import { TranslationService } from '../../services/translation';

interface ProjectItem {
  title: string;
  techStack: string;
  descKey: string;
  image: string;
  liveUrl: string;
  /** Optional: private repositories have no GitHub button. */
  githubUrl?: string;
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
      title: 'Go-Stop',
      techStack: 'JavaScript | HTML | CSS | PWA',
      descKey: 'portfolio.gostop.desc',
      image: 'assets/img/projects/gostop.webp',
      liveUrl: 'https://gostop.iamjin.de/'
    },
    {
      title: 'El Pollo Loco',
      techStack: 'JavaScript | HTML | CSS',
      descKey: 'portfolio.pollo.desc',
      image: 'assets/img/projects/el-pollo-loco.webp',
      liveUrl: 'https://el-pollo-loco.iamjin.de/',
      githubUrl: 'https://github.com/JinSooJang-DA/el-pollo-loco'
    },
    {
      title: 'Pokedex',
      techStack: 'JavaScript | HTML | CSS | REST-API',
      descKey: 'portfolio.pokedex.desc',
      image: 'assets/img/projects/pokedex.webp',
      liveUrl: 'https://pokedex.iamjin.de/',
      githubUrl: 'https://github.com/JinSooJang-DA/pokedex'
    },
    {
      title: 'Koreandiner',
      techStack: 'HTML | CSS | JavaScript',
      descKey: 'portfolio.koreandiner.desc',
      image: 'assets/img/projects/koreandiner.webp',
      liveUrl: 'https://koreandiner.iamjin.de/',
      githubUrl: 'https://github.com/JinSooJang-DA/koreandiner'
    }
  ];
}