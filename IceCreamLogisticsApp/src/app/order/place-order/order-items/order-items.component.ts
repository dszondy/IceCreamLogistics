import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {OrderItem, Recipe, RecipeClient} from 'src/app/core/api/api';
import {Observable, Subscriber} from "rxjs";
import {TypeaheadMatch} from "ngx-bootstrap/typeahead";
import {map, mergeMap} from "rxjs/operators";

@Component({
  selector: 'app-order-items',
  templateUrl: './order-items.component.html',
  styleUrls: ['./order-items.component.css']
})
export class OrderItemsComponent implements OnInit {
  recipeSelected: Recipe;
  amount: number;

  measurement = "adag";
  @Output()
  orderItemsChange = new EventEmitter<OrderItem[]>();
  orderItems: OrderItem[] = [];
  asyncSelected: string;
  recipes: Observable<Recipe[]>;

  constructor(private recipeClient: RecipeClient) {
    this.recipes = new Observable((observer: Subscriber<string>) => {
      observer.next(this.asyncSelected);
    })
      .pipe(
        mergeMap((token: string) => this.getRecipesAsObservable(token))
      );
  }

  ngOnInit(): void {
  }

  addItem(): void {
    this.orderItems.push(new OrderItem({amount: this.amount, recipe: this.recipeSelected}));
    this.amount = undefined;
    this.recipeSelected = null;
    this.orderItemsChange.emit(this.orderItems);
  }

  onRecipeSelected($event: TypeaheadMatch) {
    this.recipeSelected = $event.item;
  }

  private getRecipesAsObservable(token: string): Observable<Recipe[]> {
    return this.recipeClient.get(0, 10, token)
      .pipe(map(x => x.content));
  }
}
