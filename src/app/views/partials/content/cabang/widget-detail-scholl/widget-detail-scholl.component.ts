import { Component, OnInit, Inject } from '@angular/core';
import { Sekolah } from 'src/app/core/_base/crud/models/school-organization';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'kt-widget-detail-scholl',
  templateUrl: './widget-detail-scholl.component.html',
  styleUrls: ['./widget-detail-scholl.component.scss']
})
export class WidgetDetailSchollComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public sekolah: Sekolah,
    private dialogRef: MatDialogRef<WidgetDetailSchollComponent>
  ) { }

  close() {
    this.dialogRef.close()
  }

  ngOnInit(): void {
  }

}
