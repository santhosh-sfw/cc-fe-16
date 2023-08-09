import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDeptCaroselComponent } from './add-dept-carosel.component';

describe('AddDeptCaroselComponent', () => {
  let component: AddDeptCaroselComponent;
  let fixture: ComponentFixture<AddDeptCaroselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDeptCaroselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDeptCaroselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
