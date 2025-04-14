import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { vehicleDtl } from './jsonData';

@Component({
  selector: 'app-premium-breakup',
  imports: [],
  templateUrl: './premium-breakup.component.html',
  styleUrl: './premium-breakup.component.scss'
})
export class PremiumBreakupComponent implements OnInit{

  id: any;
  vehicleDtl:any;

  constructor 
  (
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<PremiumBreakupComponent>
  ) 
  {
    dialogRef.disableClose = true;
    this.id = data.id;
  }

  ngOnInit(): void {
    this.setValues();
  }
  
  setValues(){
    this.vehicleDtl = vehicleDtl;
  }
  
  closeDialog(){
    this.dialogRef.close()
  }
  
}
