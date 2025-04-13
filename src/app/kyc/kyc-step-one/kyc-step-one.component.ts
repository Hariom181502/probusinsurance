import { CommonModule } from '@angular/common';
import { Component, HostListener, Input } from '@angular/core';
import { MaterialModule } from '../../shared/module/material/material.module';
import { InnerHeaderComponent } from '../../layout/inner-header/inner-header.component';

@Component({
  selector: 'app-kyc-step-one',
  imports: [CommonModule, MaterialModule, InnerHeaderComponent],
  templateUrl: './kyc-step-one.component.html',
  styleUrl: './kyc-step-one.component.scss'
})
export class KycStepOneComponent {

  @Input() logoTitle: any = 'KYC';

  isMobile = false;
  showMobileExtras = true;
  arrowVisible = false;

  ngOnInit(): void {
    this.checkScreenSize();
  }

  @HostListener('window:resize', [])
  onResize() {
    this.checkScreenSize();
  }


  checkScreenSize() {
    this.isMobile = window.innerWidth < 576;

    if (this.isMobile) {
      this.showMobileExtras = false;
      this.arrowVisible = false;
    } else {
      this.showMobileExtras = true;
      this.arrowVisible = false;
    }
  }

  toggleInfo(type: string) {
    if (type === 'expand') {
      this.showMobileExtras = true;
      this.arrowVisible = true;
    } else {
      this.showMobileExtras = false;
      this.arrowVisible = false;
    }
  }
}
