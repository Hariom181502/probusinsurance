import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../shared/module/material/material.module';
import { HeaderComponent } from "../layout/header/header.component";
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [MaterialModule, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
   
  regForm!:FormGroup;

  constructor(private _router:Router,private _fb:FormBuilder){}

  ngOnInit(): void {
   this.initializeForm()  
  }

  getVehicelDtl(){
    this._router.navigate(['vehicleDetails']);    
  }

  initializeForm(){
   this.regForm = this._fb.group({
    regNum:['',Validators.required]
   })
  }
}
