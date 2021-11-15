import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {OrderItem, Recipe, RecipeClient} from 'src/app/core/api/api';
import {Observable, Subscriber} from 'rxjs';
import {TypeaheadMatch} from 'ngx-bootstrap/typeahead';
import {map, mergeMap} from 'rxjs/operators';

@Component({
  selector: 'app-order-items',
  templateUrl: './order-items.component.html',
  styleUrls: ['./order-items.component.css']
})
export class OrderItemsComponent implements OnInit {
  recipeSelected: Recipe;
  asyncRecipeName: string;
  amount: number;

  measurement = 'adag';
  @Output()
  orderItemsChange = new EventEmitter<OrderItem[]>();
  orderItems: OrderItem[] = [];
  recipes: Observable<Recipe[]>;

  constructor(private recipeClient: RecipeClient) {
    this.recipes = new Observable((observer: Subscriber<string>) => {
      observer.next(this.asyncRecipeName);
    })
      .pipe(
        mergeMap((token: string) => this.getRecipesAsObservable(token))
      );
  }

  ngOnInit(): void {
  }

  addItem(): void {
    if (this.orderItems.find(item => item.recipe.id === this.recipeSelected.id)) {
      this.orderItems.find(item => item.recipe.id === this.recipeSelected.id).amount += this.amount;
    } else {
      this.orderItems.push(new OrderItem({
        recipe: this.recipeSelected,
        amount: this.amount
      }));
    }
    this.asyncRecipeName = '',
      this.amount = undefined;
    this.recipeSelected = null;
    this.orderItemsChange.emit(this.orderItems);
  }

  onRecipeSelected($event: TypeaheadMatch): void {
    this.recipeSelected = $event.item;
  }

  removeItem(orderItem: OrderItem): void {
    this.orderItems = this.orderItems.filter(item => item.recipe.id !== orderItem.recipe.id);
    this.orderItemsChange.emit(this.orderItems);
  }

  private getRecipesAsObservable(token: string): Observable<Recipe[]> {
    return this.recipeClient.list(0, 10, token)
      .pipe(map(x => x.content));
  }
}
