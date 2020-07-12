import { Component, OnInit, Input, Inject } from '@angular/core';
import { Cabang } from 'src/app/core/_base/crud/models/hangtuah-organization';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'kt-widget-detail-cabang',
  templateUrl: './widget-detail-cabang.component.html',
  styleUrls: ['./widget-detail-cabang.component.scss']
})
export class WidgetDetailCabangComponent implements OnInit {
  title: string

  constructor(
    public dialogRef: MatDialogRef<WidgetDetailCabangComponent>,
    @Inject(MAT_DIALOG_DATA) public selectedCabang: Cabang
  ) {}

  close() {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.title = `Detail Data ${this.selectedCabang.name}`
  }

}
