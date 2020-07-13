import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetListSchollCabangComponent } from './widget-list-scholl-cabang.component';

describe('WidgetListSchollCabangComponent', () => {
  let component: WidgetListSchollCabangComponent;
  let fixture: ComponentFixture<WidgetListSchollCabangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetListSchollCabangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetListSchollCabangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
