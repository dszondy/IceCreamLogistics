import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Ingredient, IngredientClient, RecipeIngredientDto} from '../../../core/api/api';
import {Observable, Subscriber} from 'rxjs';
import {map, mergeMap} from 'rxjs/operators';
import {TypeaheadMatch} from 'ngx-bootstrap/typeahead';

@Component({
  selector: 'app-recipe-ingredients',
  templateUrl: './recipe-ingredients.component.html',
  styleUrls: ['./recipe-ingredients.component.css']
})
export class RecipeIngredientsComponent implements OnInit {

  ingredientSelected: Ingredient;
  asyncIngredientName: string;
  amount: number;

  @Output()
  recipeIngredientsChange = new EventEmitter<RecipeIngredientDto[]>();
  @Input()
  recipeIngredients: RecipeIngredientDto[] = [];
  ingredients: Observable<Ingredient[]>;

  constructor(private ingredientClient: IngredientClient) {
    this.ingredients = new Observable((observer: Subscriber<string>) => {
      observer.next(this.asyncIngredientName);
    })
      .pipe(
        mergeMap((token: string) => this.getIngredientsAsObservable(token))
      );
  }

  ngOnInit(): void {
  }

  addItem(): void {
    this.recipeIngredients.push(new RecipeIngredientDto({
      amount: this.amount,
      ingredientId: this.ingredientSelected.id,
      ingredientName: this.ingredientSelected.name,
      measurementUnit: this.ingredientSelected.measurementUnit
    }));

    this.amount = undefined;
    this.ingredientSelected = null;
    this.asyncIngredientName = '';
    this.recipeIngredientsChange.emit(this.recipeIngredients);
  }

  onIngredientSelected($event: TypeaheadMatch): void {
    this.ingredientSelected = $event.item;
  }

  private getIngredientsAsObservable(token: string): Observable<Ingredient[]> {
    return this.ingredientClient.get(0, 10, token)
      .pipe(map(x => x.content));
  }

  removeItem(ingredient: RecipeIngredientDto): void {
    this.recipeIngredients = this.recipeIngredients.filter(x => x !== ingredient);
    this.recipeIngredientsChange.emit(this.recipeIngredients);
  }
}
