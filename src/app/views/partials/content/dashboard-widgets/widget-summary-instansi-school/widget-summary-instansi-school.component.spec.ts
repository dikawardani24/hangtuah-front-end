import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetSummaryInstansiSchoolComponent } from './widget-summary-instansi-school.component';

describe('WidgetSummaryInstansiSchoolComponent', () => {
  let component: WidgetSummaryInstansiSchoolComponent;
  let fixture: ComponentFixture<WidgetSummaryInstansiSchoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetSummaryInstansiSchoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetSummaryInstansiSchoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
