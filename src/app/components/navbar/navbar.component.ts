import { Component } from '@angular/core';

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  openPdf(): void {
    const pdfUrl = '../../assets/curriculo-mariana.pdf'; 
    console.log(pdfUrl);
    
    window.open(pdfUrl, '_blank'); 
  }
}
