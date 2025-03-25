import { Component } from '@angular/core';
import { InnerHeaderComponent } from "../layout/inner-header/inner-header.component";
import { MaterialModule } from '../shared/module/material/material.module';

@Component({
  selector: 'app-vehicle-details',
  imports: [InnerHeaderComponent,MaterialModule],
  templateUrl: './vehicle-details.component.html',
  styleUrl: './vehicle-details.component.scss'
})
export class VehicleDetailsComponent {
  
  logoTitle:any = 'Vehicle Details'
}
