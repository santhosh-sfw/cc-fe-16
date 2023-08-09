import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplianceSearchLibComponent } from './compliance-search-lib.component';

describe('ComplianceSearchLibComponent', () => {
  let component: ComplianceSearchLibComponent;
  let fixture: ComponentFixture<ComplianceSearchLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComplianceSearchLibComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComplianceSearchLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
