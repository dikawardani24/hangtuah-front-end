import { Component, OnInit, Input } from '@angular/core';
import { SchoolData } from 'src/app/core/generator/school-org-generator';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { WidgetStructureSchollComponent } from '../widget-structure-scholl/widget-structure-scholl.component';
import { WidgetDetailSchollComponent } from '../widget-detail-scholl/widget-detail-scholl.component';

@Component({
  selector: 'kt-widget-item-scholl-cabang',
  templateUrl: './widget-item-scholl-cabang.component.html',
  styleUrls: ['./widget-item-scholl-cabang.component.scss']
})
export class WidgetItemSchollCabangComponent implements OnInit {
  @Input()
  item: SchoolData

  constructor(
     private dialog: MatDialog
  ) { }

  viewDetailSekolah() {
    const config: MatDialogConfig = {
      disableClose: false,
      autoFocus: true,
      data: this.item.getSekolah(),
    }

    this.dialog.open(WidgetDetailSchollComponent, config)
  }

  viewStructureSekolah() {
    const config: MatDialogConfig = {
      disableClose: false,
      autoFocus: true,
      data: this.item,
      height: '98%',
      width: '100vw',
      position: {
        top: '10px',
        right: '10px'
      },
      panelClass: 'full-screen-modal',
    }

    this.dialog.open(WidgetStructureSchollComponent, config)
  }

  ngOnInit(): void {
  }

}
