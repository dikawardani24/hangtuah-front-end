import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerwakilanComponent } from './perwakilan.component';

describe('PerwakilanComponent', () => {
  let component: PerwakilanComponent;
  let fixture: ComponentFixture<PerwakilanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerwakilanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerwakilanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
