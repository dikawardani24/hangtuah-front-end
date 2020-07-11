import { Component, OnInit } from '@angular/core';
import { SchoolGroup, SchoolGroupType } from 'src/app/core/_base/crud/models/school-group';
import { School, SchoolType } from 'src/app/core/_base/crud/models/school';
import { Pengurus } from 'src/app/core/_base/crud/models/pengurus';

@Component({
  selector: 'kt-pusat',
  templateUrl: './pusat.component.html',
  styleUrls: ['./pusat.component.scss']
})
export class PusatComponent implements OnInit {
  schoolGroup = new SchoolGroup();
  constructor() { }

  generateDummyData() {
      const schools: School[] = []
      const pengurus = new Pengurus()

      this.schoolGroup.id = Math.random()
      this.schoolGroup.name = 'Pusat Hang Tuah'
      this.schoolGroup.pengurus = pengurus
      this.schoolGroup.schools = schools
      this.schoolGroup.type = SchoolGroupType.PUSAT;

      pengurus.name = 'Dika Wardani'
      pengurus.jabatan = 'Kepala Pusat'
      pengurus.id = Math.random();
      pengurus.group = this.schoolGroup

      for (let j = 0; j < 100; j++) {
        const element = new School()
        element.group = this.schoolGroup
        element.id = j + 1

        if (j % 4 === 0) {
          element.name = 'Santonini'
          element.schoolType = SchoolType.SD
        } else if (j % 3 === 0) {
          element.name = 'Santonini 3'
          element.schoolType = SchoolType.SMP
        } else if (j % 2 === 0) {
          element.name = 'Berdikari'
          element.schoolType = SchoolType.SMA
        } else if (j % 5 === 0) {
          element.name = 'Cendra Kasih'
          element.schoolType = SchoolType.SMK
        } else {
          element.name = 'Bergembira'
          element.schoolType = SchoolType.PAUD
        }

        schools.push(element)
      }
  }
  ngOnInit() {
    this.generateDummyData()
  }
}
