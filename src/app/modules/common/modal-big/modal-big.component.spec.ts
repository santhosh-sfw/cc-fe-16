import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalBigComponent } from './modal-big.component';

describe('ModalBigComponent', () => {
  let component: ModalBigComponent;
  let fixture: ComponentFixture<ModalBigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalBigComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalBigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
