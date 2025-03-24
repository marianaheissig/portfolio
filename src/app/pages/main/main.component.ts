import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { CardsComponent } from "../../components/cards/cards.component";
import { ProjectsComponent } from '../../components/projects/projects.component';


@Component({
  selector: 'app-main',
  standalone: true,
  imports: [NavbarComponent, CardsComponent, ProjectsComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  skills = [
    {name:'Angular', level: 'Intermediário', time: '2', icon: '../../../assets/imgs/logos/angular.png', experience: 'Profissional'}, 
    {name:'HTML', level: 'Avançado', time: '5', icon: '../../../assets/imgs/logos/html.webp', experience:'Profissional e Acadêmica'}, 
    {name:'CSS', level: 'Avançado', time: '5', icon: '../../../assets/imgs/logos/css.svg', experience: 'Profissional e Acadêmica'}, 
    {name:'C#', level: 'Básico', time: '+1', icon: '../../../assets/imgs/logos/cs.png', experience:'Acadêmica'}, 
    {name:'Firebase', level: 'Intermediário', time: '2', icon: '../../../assets/imgs/logos/firebase.png', experience:'Profissional'}, 
    {name:'Git', level: 'Intermediário', time: '2', icon: '../../../assets/imgs/logos/git.png', experience:'Profissional e Acadêmica'},
    {name:'MySql', level: 'Intermediário', time: '4', icon: '../../../assets/imgs/logos/mysql.png', experience:' Acadêmica'},
    {name:'Vue.js', level: 'Básico', time: '+1', icon: '../../../assets/imgs/logos/vue.png', experience:'Acadêmica'},
    {name:'Node.js', level: 'Básico', time: '+1', icon: '../../../assets/imgs/logos/node.png', experience:'Acadêmica'},
    {name:'React', level: 'Básico', time: '+1', icon: '../../../assets/imgs/logos/react.png', experience:'Acadêmica'},
  ];

  projects = [
    {name:'Projeto 1', image: '../../../assets/imgs/projects/project1.png', description: 'Descrição do projeto 1', technologies: 'Angular, Firebase, HTML, CSS', link: ' #' },
    {name:'Projeto 2', image: '../../../assets/imgs/projects/project2.png', description: 'Descrição do projeto 2', technologies: 'Angular, Firebase, HTML, CSS', link: ' #' },
   ]

}
