import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetItemSchollCabangComponent } from './widget-item-scholl-cabang.component';

describe('WidgetItemSchollCabangComponent', () => {
  let component: WidgetItemSchollCabangComponent;
  let fixture: ComponentFixture<WidgetItemSchollCabangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetItemSchollCabangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetItemSchollCabangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
