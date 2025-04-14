import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../shared/module/material/material.module';
import { specificPlanDtl } from './jsonData';
import { MatDialog } from '@angular/material/dialog';
import { CashlessGaragesComponent } from '../dialogs/cashless-garages/cashless-garages.component';

@Component({
  selector: 'app-single-quotation',
  imports: [MaterialModule],
  templateUrl: './single-quotation.component.html',
  styleUrl: './single-quotation.component.scss'
})
export class SingleQuotationComponent implements OnInit{
  
  specificPlanDtl:any;
  id: any;
  
  constructor(private _dialog:MatDialog){}
  
  ngOnInit(): void {
    this.setValues();
  }

  setValues(){
    this.specificPlanDtl = specificPlanDtl;
  }

  cashlessGarages(){
    this._dialog.open(CashlessGaragesComponent,{
      panelClass:'small-dialog',
      autoFocus:true,
      data:{
        title : this.id
      }
    });
  }
}
