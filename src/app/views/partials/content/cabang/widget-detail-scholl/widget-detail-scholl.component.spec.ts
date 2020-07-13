import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetDetailSchollComponent } from './widget-detail-scholl.component';

describe('WidgetDetailSchollComponent', () => {
  let component: WidgetDetailSchollComponent;
  let fixture: ComponentFixture<WidgetDetailSchollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetDetailSchollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetDetailSchollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
