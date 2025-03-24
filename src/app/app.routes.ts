import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QuotationListComponent } from './quotation-list/quotation-list.component';

export const routes: Routes = [
    {path:'home',component:HomeComponent},
    {path:'quotation',component:QuotationListComponent},
];
