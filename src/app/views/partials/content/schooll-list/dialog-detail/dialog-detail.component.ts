import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
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
