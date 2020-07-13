import { Component, OnInit, Inject } from '@angular/core';
import { SchoolData, SchoolOrganization } from 'src/app/core/generator/school-org-generator';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { WidgetDetailEmployeeCabangComponent } from '../widget-detail-employee-cabang/widget-detail-employee-cabang.component';

@Component({
  selector: 'kt-widget-structure-scholl',
  templateUrl: './widget-structure-scholl.component.html',
  styleUrls: ['./widget-structure-scholl.component.scss']
})
export class WidgetStructureSchollComponent implements OnInit {
  nodes: any

  constructor(
    @Inject(MAT_DIALOG_DATA) public item: SchoolData,
    private dialog: MatDialog,
    public dialogRef: MatDialogRef<WidgetStructureSchollComponent>
  ) { }

  close() {
    this.dialogRef.close()
  }


  viewDataEmployee(selected) {
    console.log(selected);

    if (selected != null) {
      const karyawan = this.item.searchByNik(selected.nik)
      const config: MatDialogConfig = {
        disableClose: false,
        autoFocus: true,
        data: karyawan,
        maxHeight: '90vh'
      }
      this.dialog.open(WidgetDetailEmployeeCabangComponent, config)
    }
  }

  ngOnInit(): void {
    this.nodes = new SchoolOrganization(this.item).getStructure()
  }

}
