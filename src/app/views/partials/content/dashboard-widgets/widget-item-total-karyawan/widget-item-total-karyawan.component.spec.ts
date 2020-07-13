import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetItemTotalKaryawanComponent } from './widget-item-total-karyawan.component';

describe('WidgetItemTotalKaryawanComponent', () => {
  let component: WidgetItemTotalKaryawanComponent;
  let fixture: ComponentFixture<WidgetItemTotalKaryawanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetItemTotalKaryawanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetItemTotalKaryawanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
