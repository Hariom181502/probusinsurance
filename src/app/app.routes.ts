import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QuotationListComponent } from './quotation-list/quotation-list.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { PolicyDetailsComponent } from './policy-details/policy-details.component';
import { AdditionalInformationComponent } from './additional-information/additional-information.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'home',component:HomeComponent},
    {path:'vehicleDetails',component:VehicleDetailsComponent},
    {path:'policyDetails',component:PolicyDetailsComponent},
    {path:'additionalInformation',component:AdditionalInformationComponent},
    {path:'quotation',component:QuotationListComponent},
];
