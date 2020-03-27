import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatewisDetailsComponent } from './statewis-details.component';

describe('StatewisDetailsComponent', () => {
  let component: StatewisDetailsComponent;
  let fixture: ComponentFixture<StatewisDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatewisDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatewisDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
