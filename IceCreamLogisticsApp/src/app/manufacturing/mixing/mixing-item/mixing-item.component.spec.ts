import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MixingItemComponent } from './mixing-item.component';

describe('MixingItemComponent', () => {
  let component: MixingItemComponent;
  let fixture: ComponentFixture<MixingItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MixingItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MixingItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
