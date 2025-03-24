import { Component, Input } from '@angular/core';

@Component({
  selector: 'projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
 @Input() name: string = '';
 @Input() image: string = '';
 @Input() description: string = '';
 @Input() technologies: string = '';
 @Input() link: string = '';
}
