import { Component, OnInit } from '@angular/core';
import { InnerHeaderComponent } from '../layout/inner-header/inner-header.component';
import { MaterialModule } from '../shared/module/material/material.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-additional-information',
  imports: [InnerHeaderComponent,MaterialModule],
  templateUrl: './additional-information.component.html',
  styleUrl: './additional-information.component.scss'
})
export class AdditionalInformationComponent  implements OnInit {
  
  logoTile:any='Additional Information';
  customerTypeDtl:any;
  personalAcceDtl:any;
  licenceDtl:any;
  
  additionalInfoForm!:FormGroup;
  
  constructor(private _router:Router,private _fb:FormBuilder){}
  
  ngOnInit(): void {
    this.setValues();
    this.initializeForm();
  }

  initializeForm(){
    this.additionalInfoForm = this._fb.group({
      manufactYear:['',Validators.required],
      purchaseDate: ['', Validators.required],
      policyTerm: ['', Validators.required],
      customerType: ['', Validators.required],
      drivingLicense: ['', Validators.required],
      personalAccident: ['', Validators.required],
    })
   }
   
  setValues(){
    this.customerTypeDtl = [
      {title:'Individual',titleVal:0},
      {title:'Organization',titleVal:1},
    ]
    this.personalAcceDtl = [
      {title:'Yes',titleVal:0},
      {title:'No',titleVal:1},
    ]
    this.licenceDtl = [
      {title:'Yes',titleVal:0},
      {title:'No',titleVal:1},
    ]
  }

  getQuotation(){
    this._router.navigate(['quotation']);    
  }
}
