import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GapAnalysisPmComponent } from './gap-analysis-pm.component';

describe('GapAnalysisPmComponent', () => {
  let component: GapAnalysisPmComponent;
  let fixture: ComponentFixture<GapAnalysisPmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GapAnalysisPmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GapAnalysisPmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
