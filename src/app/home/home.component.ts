import { Component } from '@angular/core';
import { MaterialModule } from '../shared/module/material/material.module';
import { HeaderComponent } from "../layout/header/header.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [MaterialModule, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private _router:Router){}

  getVehicelDtl(){
    this._router.navigate(['vehicleDetails']);    
  }

}
