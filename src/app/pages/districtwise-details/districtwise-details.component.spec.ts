import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrictwiseDetailsComponent } from './districtwise-details.component';

describe('DistrictwiseDetailsComponent', () => {
  let component: DistrictwiseDetailsComponent;
  let fixture: ComponentFixture<DistrictwiseDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistrictwiseDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistrictwiseDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
