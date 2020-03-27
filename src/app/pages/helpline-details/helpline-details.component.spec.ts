import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelplineDetailsComponent } from './helpline-details.component';

describe('HelplineDetailsComponent', () => {
  let component: HelplineDetailsComponent;
  let fixture: ComponentFixture<HelplineDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelplineDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelplineDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
