import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewBatchComponent } from './preview-batch.component';

describe('PreviewBatchComponent', () => {
  let component: PreviewBatchComponent;
  let fixture: ComponentFixture<PreviewBatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviewBatchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewBatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
