import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetSummarySchoolComponent } from './widget-summary-school.component';

describe('WidgetSummarySchoolComponent', () => {
  let component: WidgetSummarySchoolComponent;
  let fixture: ComponentFixture<WidgetSummarySchoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetSummarySchoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetSummarySchoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
