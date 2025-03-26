import { Component, OnInit } from '@angular/core';
import { InnerHeaderComponent } from "../layout/inner-header/inner-header.component";
import { MaterialModule } from '../shared/module/material/material.module';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-vehicle-details',
  imports: [InnerHeaderComponent,MaterialModule],
  templateUrl: './vehicle-details.component.html',
  styleUrl: './vehicle-details.component.scss'
})
export class VehicleDetailsComponent implements OnInit {
  
  logoTitle:any = 'Vehicle Details'
  vehicleDtlForm!:FormGroup;

  constructor(private _router:Router,private _fb:FormBuilder){}
  
  ngOnInit(): void {
    this.initializeForm()  
   }

  initializeForm(){
    this.vehicleDtlForm = this._fb.group({
      rtoCity:['',Validators.required],
      manufacturingYear: ['', Validators.required],
      makeModel: ['', Validators.required],
      variant: ['', Validators.required],
      registrationYear: ['', Validators.required]
    })
   }
  
   getPolicyDtl(){
    this._router.navigate(['policyDetails']);    
  }
}
