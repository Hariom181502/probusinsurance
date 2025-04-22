import { CommonModule } from '@angular/common';
import { Component, HostListener, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MaterialModule } from '../../shared/module/material/material.module';
import { InnerHeaderComponent } from '../../layout/inner-header/inner-header.component';

@Component({
  selector: 'app-proposal-personal-details',
  imports: [CommonModule,MaterialModule,InnerHeaderComponent],
  templateUrl: './proposal-personal-details.component.html',
  styleUrl: './proposal-personal-details.component.scss'
})
export class ProposalPersonalDetailsComponent {
 
  @Input() logoTitle: any = 'Proposal Detail';

  isMobile = true;
  showMobileExtras = true;
  arrowVisible = false;
  personalAccidentDtl:any;

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
    this.personalAccidentDtl = [
      {title:'Yes',titleVal:0},
      {title:'No',titleVal:1},
    ]
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
    this._router.navigate(['/proposalVehicleDetails'])
  }
  
}
