import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetStructureSchollComponent } from './widget-structure-scholl.component';

describe('WidgetDetailSchollCabangComponent', () => {
  let component: WidgetStructureSchollComponent;
  let fixture: ComponentFixture<WidgetStructureSchollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetStructureSchollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetStructureSchollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
