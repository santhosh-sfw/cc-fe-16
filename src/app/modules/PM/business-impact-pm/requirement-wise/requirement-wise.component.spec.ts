import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequirementWiseComponent } from './requirement-wise.component';

describe('RequirementWiseComponent', () => {
  let component: RequirementWiseComponent;
  let fixture: ComponentFixture<RequirementWiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequirementWiseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequirementWiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
