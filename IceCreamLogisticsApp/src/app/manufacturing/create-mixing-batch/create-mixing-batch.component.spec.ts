import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CreateMixingBatchComponent} from './create-mixing-batch.component';

describe('CreateManufacturingBatchComponent', () => {
  let component: CreateMixingBatchComponent;
  let fixture: ComponentFixture<CreateMixingBatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateMixingBatchComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMixingBatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
