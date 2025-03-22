import { Component } from '@angular/core';
import { HomeComponent } from "./home/home.component";
import { MaterialModule } from './shared/module/material/material.module';

@Component({
  selector: 'app-root',
  imports: [HomeComponent, MaterialModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'probusinsurance';
}
