import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComplianceContainerComponent } from './search-compliance-container.component';

describe('SearchComplianceContainerComponent', () => {
  let component: SearchComplianceContainerComponent;
  let fixture: ComponentFixture<SearchComplianceContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchComplianceContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchComplianceContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
