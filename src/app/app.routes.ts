import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QuotationListComponent } from './quotation-list/quotation-list.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { PolicyDetailsComponent } from './policy-details/policy-details.component';
import { AdditionalInformationComponent } from './additional-information/additional-information.component';
import { KycStepOneComponent } from './kyc/kyc-step-one/kyc-step-one.component';
import { KycStepTwoComponent } from './kyc/kyc-step-two/kyc-step-two.component';
import { ProposalPersonalDetailsComponent } from './proposal/proposal-personal-details/proposal-personal-details.component';
import { ProposalVehicleDetailsComponent } from './proposal/proposal-vehicle-details/proposal-vehicle-details.component';
import { ProposalTermsConditionsComponent } from './proposal/proposal-terms-conditions/proposal-terms-conditions.component';
import { ProposalPreviewInformationComponent } from './proposal/proposal-preview-information/proposal-preview-information.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'home',component:HomeComponent},
    {path:'vehicleDetails',component:VehicleDetailsComponent},
    {path:'policyDetails',component:PolicyDetailsComponent},
    {path:'additionalInformation',component:AdditionalInformationComponent},
    {path:'quotation',component:QuotationListComponent},
    {path:'KycDetailStep-1',component:KycStepOneComponent},
    {path:'KycDetailStep-2',component:KycStepTwoComponent},
    {path:'personalDetails',component:ProposalPersonalDetailsComponent},
    {path:'proposalVehicleDetails',component:ProposalVehicleDetailsComponent},
    {path:'proposalTermsConditions',component:ProposalTermsConditionsComponent},
    {path:'proposalPreviewInformation',component:ProposalPreviewInformationComponent},
];
