import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmendmentCarouselComponent } from './amendment-carousel.component';

describe('AmendmentCarouselComponent', () => {
  let component: AmendmentCarouselComponent;
  let fixture: ComponentFixture<AmendmentCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmendmentCarouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmendmentCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
