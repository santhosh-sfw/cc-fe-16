import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComplianceLibraryComponent } from './search-compliance-library.component';

describe('SearchComplianceLibraryComponent', () => {
  let component: SearchComplianceLibraryComponent;
  let fixture: ComponentFixture<SearchComplianceLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchComplianceLibraryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchComplianceLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
