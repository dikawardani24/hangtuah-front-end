import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetStructureCabangComponent } from './widget-structure-cabang.component';

describe('WidgetStructureCabangComponent', () => {
  let component: WidgetStructureCabangComponent;
  let fixture: ComponentFixture<WidgetStructureCabangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetStructureCabangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetStructureCabangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
