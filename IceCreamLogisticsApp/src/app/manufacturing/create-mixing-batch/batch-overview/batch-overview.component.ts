import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MixingBatchOrder, MixingBatchRecipe} from '../models';

@Component({
  selector: 'app-batch-overview',
  templateUrl: './batch-overview.component.html',
  styleUrls: ['./batch-overview.component.css']
})
export class BatchOverviewComponent implements OnInit {
  @Output()
  orderSelected = new EventEmitter<MixingBatchOrder>();
  @Output()
  recipeDeselected = new EventEmitter<number>();
  recipes: MixingBatchRecipe[];

  constructor() {
  }

  @Input()
  set mixingBatchOrders(value: MixingBatchOrder[]) {
    this.recipes = this.toInternalRepresentation(value);
  }

  toInternalRepresentation(mixingBatchOrders: MixingBatchOrder[]): MixingBatchRecipe[] {
    const ordersByRecipeId = new Map<number, MixingBatchRecipe>();
    mixingBatchOrders.forEach(order =>
      order.items.forEach(item => {
          if (item.memberAmount > 0) {
            if (ordersByRecipeId.get(item.recipeId)) {
              const elem = ordersByRecipeId.get(item.recipeId);
              elem.totalAmount += item.memberAmount;
              elem.totalClients += 1;
              elem.items.push({
                item: order.items.find(x => x.recipeId === item.recipeId),
                order
              });
            } else {
              ordersByRecipeId.set(item.recipeId, {
                  recipeName: item.recipeName,
                  recipeId: item.recipeId,
                  totalAmount: item.memberAmount,
                  completedAmount: 0,
                  totalClients: 1,
                  items: [{
                    item: order.items.find(x => x.recipeId === item.recipeId),
                    order
                  }]
                }
              );
            }
          }
        }
      )
    );
    return [...ordersByRecipeId.values()];
  }


  ngOnInit(): void {
  }

  onRecipeRemoved(recipeId: number): void {
    this.recipeDeselected.emit(recipeId);
  }

  onItemChecked($event: boolean, recipeId: number, order: MixingBatchOrder): void {
    order.member.items = order.member.items.filter(x => x.recipeId !== recipeId);
    const value = new MixingBatchOrder(order.orderPart, order.member);
    this.orderSelected.emit(value);
  }
}
