import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

  skills = [
    {name:'Angular', level: 'Intermediário', time: '2', icon: '../../../assets/imgs/logos/angular.png'}, 
    {name:'HTML', level: 'Avançado', time: '5', icon: '../../../assets/imgs/logos/html.webp'}, 
    {name:'CSS', level: 'Avançado', time: '5', icon: '../../../assets/imgs/logos/css.svg'}, 
    {name:'C#', level: 'Básico', time: '+1', icon: '../../../assets/imgs/logos/cs.png'}, 
    {name:'Firebase', level: 'Intermediário', time: '2', icon: '../../../assets/imgs/logos/firebase.png'}, 
    {name:'Git', level: 'Intermediário', time: '2', icon: '../../../assets/imgs/logos/git.png'},
    {name:'MySql', level: 'Intermediário', time: '4', icon: '../../../assets/imgs/logos/mysql.png'},
    {name:'Vue.js', level: 'Básico', time: '+1', icon: '../../../assets/imgs/logos/vue.png'},
  ];

}
