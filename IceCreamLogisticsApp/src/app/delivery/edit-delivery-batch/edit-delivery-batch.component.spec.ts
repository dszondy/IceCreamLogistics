import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDeliveryBatchComponent } from './edit-delivery-batch.component';

describe('CreateDeliveryBatchComponent', () => {
  let component: EditDeliveryBatchComponent;
  let fixture: ComponentFixture<EditDeliveryBatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDeliveryBatchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDeliveryBatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
