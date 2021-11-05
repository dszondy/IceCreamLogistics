import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SelectOrdersComponent} from './select-orders.component';

describe('ListOrdersComponent', () => {
  let component: SelectOrdersComponent;
  let fixture: ComponentFixture<SelectOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectOrdersComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
