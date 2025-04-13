import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSliderModule} from '@angular/material/slider';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatProgressBarModule} from '@angular/material/progress-bar';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatSliderModule,
    FormsModule
  ],
  exports:[
    MatCardModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatSliderModule,
    FormsModule,
    MatTooltipModule,
    MatProgressBarModule
  ]
})
export class MaterialModule { }
