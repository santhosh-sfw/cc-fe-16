import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplianceLibComponent } from './compliance-lib.component';

describe('ComplianceLibComponent', () => {
  let component: ComplianceLibComponent;
  let fixture: ComponentFixture<ComplianceLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComplianceLibComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComplianceLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
