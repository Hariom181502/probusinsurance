import { Component } from '@angular/core';
import { SingleQuotationComponent } from "./single-quotation/single-quotation.component";
import { InnerHeaderComponent } from "../layout/inner-header/inner-header.component";
import { MaterialModule } from '../shared/module/material/material.module';

@Component({
  selector: 'app-quotation-list',
  imports: [SingleQuotationComponent, InnerHeaderComponent, MaterialModule],
  templateUrl: './quotation-list.component.html',
  styleUrl: './quotation-list.component.scss'
})
export class QuotationListComponent {

}
