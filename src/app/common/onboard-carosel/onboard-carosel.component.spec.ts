import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardCaroselComponent } from './onboard-carosel.component';

describe('OnboardCaroselComponent', () => {
  let component: OnboardCaroselComponent;
  let fixture: ComponentFixture<OnboardCaroselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnboardCaroselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnboardCaroselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
