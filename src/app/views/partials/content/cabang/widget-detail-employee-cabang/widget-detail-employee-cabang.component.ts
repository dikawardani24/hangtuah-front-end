import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Pengurus } from 'src/app/core/_base/crud/models/hangtuah-organization';

@Component({
  selector: 'kt-widget-detail-employee-cabang',
  templateUrl: './widget-detail-employee-cabang.component.html',
  styleUrls: ['./widget-detail-employee-cabang.component.scss']
})
export class WidgetDetailEmployeeCabangComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<WidgetDetailEmployeeCabangComponent>,
    @Inject(MAT_DIALOG_DATA) public pengurus: Pengurus
  ) { }

  close() {
    this.dialogRef.close()
  }

  ngOnInit(): void {
  }

}
