import { Component } from '@angular/core';
import { MaterialModule } from '../../shared/module/material/material.module';

@Component({
  selector: 'app-customize-policy-details',
  imports: [MaterialModule],
  templateUrl: './customize-policy-details.component.html',
  styleUrl: './customize-policy-details.component.scss'
})
export class CustomizePolicyDetailsComponent {
  panelOpenState: boolean[] = [true, false, true, false, false];

}
