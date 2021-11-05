import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchOverviewComponent } from './batch-overview.component';

describe('BatchOverviewComponent', () => {
  let component: BatchOverviewComponent;
  let fixture: ComponentFixture<BatchOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BatchOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BatchOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
