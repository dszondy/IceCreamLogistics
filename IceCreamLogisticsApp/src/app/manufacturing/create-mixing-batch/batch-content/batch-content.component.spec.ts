import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchContentComponent } from './batch-content.component';

describe('BatchContentComponent', () => {
  let component: BatchContentComponent;
  let fixture: ComponentFixture<BatchContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BatchContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BatchContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
