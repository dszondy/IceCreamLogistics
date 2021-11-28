import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ClientDetailsComponent} from './components/client-details/client-details.component';
import {TreeListComponent} from './components/tree-list/tree-list.component';
import {TreeNodeComponent} from './components/tree-list/tree-node/tree-node.component';
import {AlertModule} from "ngx-bootstrap/alert";
import {RouterModule} from "@angular/router";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {AddCheckComponent} from './components/add-check/add-check.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {BsDropdownModule} from "ngx-bootstrap/dropdown";
import {ModalModule} from "ngx-bootstrap/modal";
import {YesNoCheckComponent} from './components/yes-no-check/yes-no-check.component';
import {SelectOrdersComponent} from '../manufacturing/create-mixing-batch/select-orders/select-orders.component';
import {ClientSelectComponent} from './components/client-select/client-select.component';
import {TypeaheadModule} from 'ngx-bootstrap/typeahead';
import { OrderItemCancellationModalComponent } from './services/order-item-cancellation-modal/order-item-cancellation-modal.component';


@NgModule({
  declarations: [ClientDetailsComponent, TreeListComponent, TreeNodeComponent, AddCheckComponent, YesNoCheckComponent, ClientSelectComponent, OrderItemCancellationModalComponent],
  exports: [
    ClientDetailsComponent,
    TreeListComponent,
    TreeNodeComponent,
    AddCheckComponent,
    YesNoCheckComponent,
    ClientSelectComponent
  ],
  imports: [
    CommonModule,
    AlertModule,
    RouterModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    BsDropdownModule,
    ModalModule.forRoot(),
    TypeaheadModule,
  ]
})
export class SharedModule {
}
