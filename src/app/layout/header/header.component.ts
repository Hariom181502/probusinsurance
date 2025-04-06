import { Component } from '@angular/core';
import { MaterialModule } from '../../shared/module/material/material.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [CommonModule,MaterialModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
 
  isMenuOpen = false;
  hoveredIndex = -1;

  menuItems = [
    { title: 'Product', hasArrow: true },
    { title: 'Renew Your Policy', hasArrow: true },
    { title: 'File A Claim', hasArrow: true },
    { title: 'Contact Us', hasArrow: true },
    { title: 'Become A POSp', hasArrow: false },
    { title: 'Endorsement', hasArrow: false }
  ];

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }
  
}
