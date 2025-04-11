import { Component, HostListener, OnInit } from '@angular/core';
import { SingleQuotationComponent } from './single-quotation/single-quotation.component';
import { InnerHeaderComponent } from '../layout/inner-header/inner-header.component';
import { MaterialModule } from '../shared/module/material/material.module';
import { QuotationFilterComponent } from './quotation-filter/quotation-filter.component';
import { CommonModule } from '@angular/common';
import { selectedPolicyDtl } from './jsonData';

@Component({
  selector: 'app-quotation-list',
  imports: [SingleQuotationComponent, InnerHeaderComponent, MaterialModule, QuotationFilterComponent, CommonModule],
  templateUrl: './quotation-list.component.html',
  styleUrl: './quotation-list.component.scss'
})
export class QuotationListComponent implements OnInit {

  logoTitle: any = 'Quotation Page';

  isMobile = false;
  showMobileExtras = true;
  arrowVisible = false;
  selectedPolicyDtl:any;
  showSelectedPolicy:boolean=false;
expression: any;

  ngOnInit(): void {
    this.setValues();
    this.checkScreenSize();
  }

  @HostListener('window:resize', [])
  onResize() {
    this.checkScreenSize();
  }

  setValues(){
    this.selectedPolicyDtl = selectedPolicyDtl;
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
