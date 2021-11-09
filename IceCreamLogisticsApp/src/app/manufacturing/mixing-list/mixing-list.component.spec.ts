import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MixingListComponent } from './mixing-list.component';

describe('MixingListComponent', () => {
  let component: MixingListComponent;
  let fixture: ComponentFixture<MixingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MixingListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MixingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
