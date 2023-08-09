import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GapAnalysisBmComponent } from './gap-analysis-bm.component';

describe('GapAnalysisBmComponent', () => {
  let component: GapAnalysisBmComponent;
  let fixture: ComponentFixture<GapAnalysisBmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GapAnalysisBmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GapAnalysisBmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
