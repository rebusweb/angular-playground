import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndecrementComponent } from './indecrement.component';

describe('IndecrementComponent', () => {
  let component: IndecrementComponent;
  let fixture: ComponentFixture<IndecrementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndecrementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndecrementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
