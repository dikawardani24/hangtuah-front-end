import { Component, NgModule } from '@angular/core';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlattener, MatTreeFlatDataSource } from '@angular/material/tree';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogDetailComponent } from '../dialog-detail/dialog-detail.component';

export interface FoodNode {
  name: string;
  jabatan: string,
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Sukaesih',
    jabatan: 'Kepala Sekolah',
    children: [
      {
        name: 'Afrian',
        jabatan: 'Kepala Staff Admin',
        children: [
          {
            name: 'Sufiono',
            jabatan: 'Wakil Kepala Staff',
            children: [
              { name: 'Asep', jabatan: 'Staff Admin' },
              { name: 'Brussels sprouts', jabatan: 'Staff Admin' },
            ]
          }
        ]
      },
      {
        name: 'Sunandar',
        jabatan: 'Wali Kelas',
        children: [
          {
            name: 'Kurnia', jabatan: 'Guru Matematika', children: [
              { name: 'Arum', jabatan: 'Siswa' },
              { name: 'Fikri', jabatan: 'Siswa' }
            ]
          },
          {
            name: 'Heri', jabatan: 'Guru TIK', children: [
              { name: 'Arum', jabatan: 'Siswa' },
              { name: 'Fikri', jabatan: 'Siswa' }
            ]
          },
        ]
      }
    ]
  }
];

interface FlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

@Component({
  selector: 'kt-school-item',
  templateUrl: './school-item.component.html',
})
export class SchoolItemComponent {
  selectedNode: any;

  private _transformer = (node: FoodNode, levelNum: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      jabatan: node.jabatan,
      level: levelNum,
    };
  }

  // tslint:disable-next-line: member-ordering
  treeControl = new FlatTreeControl<FlatNode>(node => node.level, node => node.expandable);
  // tslint:disable-next-line: member-ordering
  treeFlattener = new MatTreeFlattener(
    this._transformer, node => node.level, node => node.expandable, node => node.children);

  // tslint:disable-next-line: member-ordering
  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor(private dialog: MatDialog) {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: FlatNode) => node.expandable;

  openCentred(content) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.minWidth = 600;
    dialogConfig.minHeight = 200;
    dialogConfig.data = content;

    this.dialog.open(DialogDetailComponent, dialogConfig);
  }

}
