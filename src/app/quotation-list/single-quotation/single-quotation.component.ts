import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../shared/module/material/material.module';
import { specificPlanDtl } from './jsonData';
import { MatDialog } from '@angular/material/dialog';
import { CashlessGaragesComponent } from '../dialogs/cashless-garages/cashless-garages.component';
import { PremiumBreakupComponent } from '../dialogs/premium-breakup/premium-breakup.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-single-quotation',
  imports: [MaterialModule],
  templateUrl: './single-quotation.component.html',
  styleUrl: './single-quotation.component.scss'
})
export class SingleQuotationComponent implements OnInit{
  
  specificPlanDtl:any;
  id: any;
  
  constructor(private _dialog:MatDialog,private _router:Router){}
  
  ngOnInit(): void {
    this.setValues();
  }

  setValues(){
    this.specificPlanDtl = specificPlanDtl;
  }

  cashlessGarages(){
    this._dialog.open(CashlessGaragesComponent,{
      panelClass:['cashless-garages-modal-container','small-dialog'],
      autoFocus:true,
      data:{
        title : this.id
      }
    });
  };

  premiumBreakup(){
    this._dialog.open(PremiumBreakupComponent,{
      panelClass:['premium-breakup-modal-container','medium-dialog'],
      autoFocus:true,
      data:{
        title : this.id
      }
    });
  };

  kycProcess(){
    this._router.navigate(['/KycDetailStep-1'])
  }
}
