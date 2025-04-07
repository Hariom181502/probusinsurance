import { Component, Renderer2 } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { MaterialModule } from './shared/module/material/material.module';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MaterialModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'probusinsurance';

  constructor(private router: Router, private renderer: Renderer2) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // First clear all background-related classes
        this.renderer.removeClass(document.body, 'no-bg');
        this.renderer.removeClass(document.body, 'home-bg');
        this.renderer.removeClass(document.body, 'vehicle-bg');
        this.renderer.removeClass(document.body, 'policy-bg');
        this.renderer.removeClass(document.body, 'additional-bg');

        // Quotation route - no bg at all
        if (event.url === '/quotation') {
          this.renderer.addClass(document.body, 'no-bg');
        } else {
          // Add common background image to all except quotation
          this.renderer.addClass(document.body, 'common-bg');

          // Then add background color for specific pages
          if (event.url === '/' || event.url === '/home') {
            this.renderer.addClass(document.body, 'home-bg');
          } else if (event.url === '/vehicleDetails') {
            this.renderer.addClass(document.body, 'vehicle-bg');
          } else if (event.url === '/policyDetails') {
            this.renderer.addClass(document.body, 'policy-bg');
          } else if (event.url === '/additionalInformation') {
            this.renderer.addClass(document.body, 'additional-bg');
          }
        }
      }
    });
  }
  
}
