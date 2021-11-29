import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryWarningComponent } from './inventory-warning.component';

describe('InventoryWarningComponent', () => {
  let component: InventoryWarningComponent;
  let fixture: ComponentFixture<InventoryWarningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryWarningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryWarningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
