import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-mobile-menu',
  imports: [CommonModule],
  templateUrl: './mobile-menu.component.html',
  styleUrl: './mobile-menu.component.scss'
})
export class MobileMenuComponent {

  hoveredIndex = -1;
  activeIndex = 0;

  menuItems = [
    { title: 'Product', hasArrow: true },
    { title: 'Renew Your Policy', hasArrow: true },
    { title: 'File A Claim', hasArrow: true },
    { title: 'Contact Us', hasArrow: true },
    { title: 'Become A POSp', hasArrow: false },
    { title: 'Endorsement', hasArrow: false }
  ];

  setActive(index: number): void {
    this.activeIndex = index;
  }

}
