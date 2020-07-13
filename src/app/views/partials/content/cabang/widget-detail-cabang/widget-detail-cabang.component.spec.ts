import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetDetailCabangComponent } from './widget-detail-cabang.component';

describe('WidgetDetailCabangComponent', () => {
  let component: WidgetDetailCabangComponent;
  let fixture: ComponentFixture<WidgetDetailCabangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetDetailCabangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetDetailCabangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
