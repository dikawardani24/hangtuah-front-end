import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PusatComponent } from './pusat.component';

describe('PusatComponent', () => {
  let component: PusatComponent;
  let fixture: ComponentFixture<PusatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PusatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PusatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
