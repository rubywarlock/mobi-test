import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreefoldComponent } from './threefold.component';

describe('ThreefoldComponent', () => {
  let component: ThreefoldComponent;
  let fixture: ComponentFixture<ThreefoldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreefoldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreefoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
