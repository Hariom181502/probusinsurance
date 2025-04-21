import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { MaterialModule } from './shared/module/material/material.module';
import { filter } from 'rxjs';
import { CommonModule } from '@angular/common';
import { CustomizePolicyDetailsComponent } from "./offcanvas/customize-policy-details/customize-policy-details.component";
import { MobileMenuComponent } from "./offcanvas/mobile-menu/mobile-menu.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MaterialModule, CommonModule, CustomizePolicyDetailsComponent, MobileMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'probusinsurance';
  
  layoutClass = '';

  constructor(private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        const url = event.urlAfterRedirects;
        
          const plainLayoutRoutes = ['quotation', 'KycDetailStep-1', 'KycDetailStep-2','personalDetails','proposalVehicleDetails','proposalTermsConditions','proposalPreviewInformation'];
  
        if (plainLayoutRoutes.some(route => url.includes(route))) {
          this.layoutClass = 'plain-bg-layout';
        } else if (url === '/' || url.includes('home')) {
          this.layoutClass = 'home-bg-layout';
        } else {
          this.layoutClass = 'other-bg-layout';
        }
      });
  }
  

}
