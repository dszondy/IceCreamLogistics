import {ComponentFixture, TestBed} from '@angular/core/testing';

import {IngredientConfigComponent} from './ingredient-config.component';

describe('RecipeConfigComponent', () => {
  let component: IngredientConfigComponent;
  let fixture: ComponentFixture<IngredientConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IngredientConfigComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
