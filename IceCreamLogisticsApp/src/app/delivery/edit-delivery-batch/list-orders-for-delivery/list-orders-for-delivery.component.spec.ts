import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOrdersForDeliveryComponent } from './list-orders-for-delivery.component';

describe('ListOrdersForDeliveryComponent', () => {
  let component: ListOrdersForDeliveryComponent;
  let fixture: ComponentFixture<ListOrdersForDeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOrdersForDeliveryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOrdersForDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
