import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PlaceOrderComponent} from './place-order/place-order.component';
import {ListOrdersComponent} from './list-orders/list-orders.component';
import {RouterModule} from '@angular/router';
import {routes} from './routing';
import {SharedModule} from '../shared/shared.module';
import {FormsModule} from '@angular/forms';
import {TypeaheadModule} from 'ngx-bootstrap/typeahead';
import {OrderItemsComponent} from './place-order/order-items/order-items.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {AlertModule} from 'ngx-bootstrap/alert';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { PrintLabelsComponent } from './order-details/print-labels/print-labels.component';
import {NgxPrintModule} from 'ngx-print';


@NgModule({
    declarations: [
        PlaceOrderComponent,
        ListOrdersComponent,
        OrderItemsComponent,
        OrderDetailsComponent,
        PrintLabelsComponent],
    exports: [
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        SharedModule,
        FormsModule,
        TypeaheadModule,
        FontAwesomeModule,
        ScrollingModule,
        AlertModule,
        NgxPrintModule
    ]
})
export class OrderModule {
}
