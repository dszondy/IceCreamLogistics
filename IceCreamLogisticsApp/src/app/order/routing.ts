import {Routes} from "@angular/router";
import {PlaceOrderComponent} from "./place-order/place-order.component";
import {ListOrdersComponent} from "./list-orders/list-orders.component";
import {ViewOrderComponent} from "./view-order/view-order.component";

export const routes: Routes = [
  {
    path: '',
    component: ListOrdersComponent
  },
  {
    path: 'place-order',
    component: PlaceOrderComponent
  },
  {
    path: ':id',
    component: ViewOrderComponent
  }];
