import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RapportageHistorieComponent } from './rapportage-historie.component';

describe('RapportageHistorieComponent', () => {
  let component: RapportageHistorieComponent;
  let fixture: ComponentFixture<RapportageHistorieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RapportageHistorieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RapportageHistorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
