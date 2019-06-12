import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptiesComponent } from './opties.component';

describe('OptiesComponent', () => {
  let component: OptiesComponent;
  let fixture: ComponentFixture<OptiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
