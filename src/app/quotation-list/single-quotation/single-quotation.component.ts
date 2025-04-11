import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../shared/module/material/material.module';
import { specificPlanDtl } from './jsonData';

@Component({
  selector: 'app-single-quotation',
  imports: [MaterialModule],
  templateUrl: './single-quotation.component.html',
  styleUrl: './single-quotation.component.scss'
})
export class SingleQuotationComponent implements OnInit{
  
  specificPlanDtl:any;

  ngOnInit(): void {
    this.setValues();
  }

  setValues(){
    this.specificPlanDtl = specificPlanDtl;
  }
}
