import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YesNoCheckComponent } from './yes-no-check.component';

describe('YesNoCheckComponent', () => {
  let component: YesNoCheckComponent;
  let fixture: ComponentFixture<YesNoCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YesNoCheckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YesNoCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
