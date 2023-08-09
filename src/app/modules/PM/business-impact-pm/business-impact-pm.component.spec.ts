import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessImpactPmComponent } from './business-impact-pm.component';

describe('BusinessImpactPmComponent', () => {
  let component: BusinessImpactPmComponent;
  let fixture: ComponentFixture<BusinessImpactPmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessImpactPmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessImpactPmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
