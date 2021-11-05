import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PlaceOrderComponent} from './place-order/place-order.component';
import {ViewOrderComponent} from './view-order/view-order.component';
import {ListOrdersComponent} from './list-orders/list-orders.component';
import {RouterModule} from '@angular/router';
import {routes} from './routing';
import {SharedModule} from "../shared/shared.module";
import {FormsModule} from "@angular/forms";
import {TypeaheadModule} from "ngx-bootstrap/typeahead";
import {ClientSelectComponent} from './place-order/client-select/client-select.component';
import {OrderItemsComponent} from './place-order/order-items/order-items.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";


@NgModule({
  declarations: [PlaceOrderComponent, ViewOrderComponent, ListOrdersComponent, ClientSelectComponent, OrderItemsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    FormsModule,
    TypeaheadModule,
    FontAwesomeModule
  ]
})
export class OrderModule {
}
