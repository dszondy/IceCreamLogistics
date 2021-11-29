import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetInventoryModalComponent } from './set-inventory-modal.component';

describe('SetInventoryModalComponent', () => {
  let component: SetInventoryModalComponent;
  let fixture: ComponentFixture<SetInventoryModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetInventoryModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetInventoryModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
