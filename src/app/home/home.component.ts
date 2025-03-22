import { Component } from '@angular/core';
import { MaterialModule } from '../shared/module/material/material.module';
import { HeaderComponent } from "../layout/header/header.component";

@Component({
  selector: 'app-home',
  imports: [MaterialModule, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
