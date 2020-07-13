import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetDetailEmployeeCabangComponent } from './widget-detail-employee-cabang.component';

describe('WidgetDetailEmployeeCabangComponent', () => {
  let component: WidgetDetailEmployeeCabangComponent;
  let fixture: ComponentFixture<WidgetDetailEmployeeCabangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetDetailEmployeeCabangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetDetailEmployeeCabangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
