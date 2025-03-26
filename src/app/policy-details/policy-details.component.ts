import { Component, OnInit } from '@angular/core';
import { InnerHeaderComponent } from '../layout/inner-header/inner-header.component';
import { MaterialModule } from '../shared/module/material/material.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-policy-details',
  imports: [InnerHeaderComponent,MaterialModule],
  templateUrl: './policy-details.component.html',
  styleUrl: './policy-details.component.scss'
})
export class PolicyDetailsComponent implements OnInit {

  logoTile:any='Policy Details';
  reqPolicyDtl:any;
  prePolicyDtl:any;
  preExStatusDtl:any;
  prePolicyTypeDtl:any;
  
  policyDtlForm!:FormGroup;

  constructor(private _router:Router,private _fb:FormBuilder){}

  ngOnInit(): void {
    this.setValues();
    this.initializeForm()
  }
   
  initializeForm(){
    this.policyDtlForm = this._fb.group({
      reqPolicy:['',Validators.required],
      prePolicy: ['', Validators.required],
      preExStatus: ['', Validators.required],
      policyExpire: ['', Validators.required],
      prePolicyType: ['', Validators.required]
    })
   }
   
  setValues(){
    this.reqPolicyDtl = [
      {title:'Comprehensive',titleVal:0},
      {title:'Third Party',titleVal:1},
      {title:'OD Only',titleVal:2}
    ]
    this.prePolicyDtl = [
      {title:'Yes',titleVal:0},
      {title:'No',titleVal:1},
    ]
    this.preExStatusDtl = [
      {title:'Not Expired',titleVal:0},
      {title:'Expired within 90 Days',titleVal:1},
      {title:'Expired more than 90 Days',titleVal:2},
    ]
    this.prePolicyTypeDtl = [
      {title:'Comprehensive',titleVal:0},
      {title:'Third Party',titleVal:1},
    ]
  }
  
  getAdditionalInfo(){
    this._router.navigate(['additionalInformation']);    
  }
   
}
