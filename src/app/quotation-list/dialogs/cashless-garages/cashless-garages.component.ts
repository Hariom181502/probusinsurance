import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MaterialModule } from '../../../shared/module/material/material.module';
import { agencyDtl } from './jsonData';

@Component({
  selector: 'app-cashless-garages',
  imports: [MaterialModule],
  templateUrl: './cashless-garages.component.html',
  styleUrl: './cashless-garages.component.scss'
})
export class CashlessGaragesComponent implements OnInit {

  id: any;
  agencyDtl:any;

  constructor 
  (
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<CashlessGaragesComponent>
  ) 
  {
    dialogRef.disableClose = true;
    this.id = data.id;
  }

  ngOnInit(): void {
    this.setValues();
  }
  
  setValues(){
    this.agencyDtl = agencyDtl;
  }
  
  closeDialog(){
    this.dialogRef.close()
  }
}
