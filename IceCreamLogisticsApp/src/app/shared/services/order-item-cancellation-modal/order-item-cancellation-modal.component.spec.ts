import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderItemCancellationModalComponent } from './order-item-cancellation-modal.component';

describe('OrderItemCancellationModalComponent', () => {
  let component: OrderItemCancellationModalComponent;
  let fixture: ComponentFixture<OrderItemCancellationModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderItemCancellationModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderItemCancellationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
