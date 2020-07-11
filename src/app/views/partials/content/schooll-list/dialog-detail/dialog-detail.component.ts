import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from 'src/app/views/pages/material/popups-and-modals/dialog/dialog.component';
import { FoodNode } from '../school-item/school-item.component';

@Component({
  selector: 'kt-dialog-detail',
  templateUrl: './dialog-detail.component.html',
})
export class DialogDetailComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: FoodNode) { }

  ngOnInit(): void {
  }
}
