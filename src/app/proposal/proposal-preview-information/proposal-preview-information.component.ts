import { CommonModule } from '@angular/common';
import { Component, HostListener, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MaterialModule } from '../../shared/module/material/material.module';
import { InnerHeaderComponent } from '../../layout/inner-header/inner-header.component';
import { pDetails, vDetails } from './jsonData';

@Component({
  selector: 'app-proposal-preview-information',
  imports: [CommonModule,MaterialModule,InnerHeaderComponent],
  templateUrl: './proposal-preview-information.component.html',
  styleUrl: './proposal-preview-information.component.scss'
})
export class ProposalPreviewInformationComponent {

  @Input() logoTitle: any = 'Proposal Detail';
  
  range = Array.from({ length: 6 }, (_, i) => i + 1);

  isMobile = true;
  showMobileExtras = true;
  arrowVisible = false;
  paymentMethodDtl:any;
  vDetails:any;
  pDetails:any;

  constructor(private _router:Router){}
  
  ngOnInit(): void {
    this.setValues();
    this.checkScreenSize();
  }

  @HostListener('window:resize', [])
  onResize() {
    this.checkScreenSize();
  }

  setValues(){
    this.paymentMethodDtl = [
      {title:'Credit/Debit Card',titleVal:0},
      {title:'Net Banking',titleVal:1},
    ];
    this.vDetails = vDetails;
    this.pDetails = pDetails;
  }

  checkScreenSize() {
    this.isMobile = window.innerWidth < 768;

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

  processNextStep(){
    this._router.navigate(['/proposalPreviewInformation'])
  }

}
