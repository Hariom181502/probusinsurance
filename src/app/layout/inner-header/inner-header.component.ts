import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-inner-header',
  imports: [],
  templateUrl: './inner-header.component.html',
  styleUrl: './inner-header.component.scss'
})
export class InnerHeaderComponent {
    
  @Input() title:any;

}
