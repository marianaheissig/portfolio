import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { CardsComponent } from "../../components/cards/cards.component";
import { ProjectsComponent } from '../../components/projects/projects.component';
import { CarouselModule } from 'primeng/carousel';
import { FooterComponent } from '../../components/footer/footer.component';



@Component({
  selector: 'app-main',
  standalone: true,
  imports: [NavbarComponent, CardsComponent, ProjectsComponent, CarouselModule, FooterComponent],
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
    // {name:'nome 1', image: '../../../assets/imgs/prototipo.jpg', description: 'Descrição do projeto 1', technologies: 'Angular, Firebase, HTML, CSS', link: ' #' },
    // {name:'nome 2', image: '../../../assets/imgs/prototipo.jpg', description: 'Descrição do projeto 2', technologies: 'Angular, Firebase, HTML, CSS', link: ' #' },
   ]

   openPdf(): void {
    const pdfUrl = '../../../assets/curriculo-mariana.pdf'; 
    window.open(pdfUrl, '_blank'); 
  }

}
