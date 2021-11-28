import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditDeliveryBatchComponent } from './edit-delivery-batch/edit-delivery-batch.component';
import { ListOrdersForDeliveryComponent } from './edit-delivery-batch/list-orders-for-delivery/list-orders-for-delivery.component';
import { PreviewBatchComponent } from './edit-delivery-batch/preview-batch/preview-batch.component';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import {routes} from './routing';
import {FormsModule} from '@angular/forms';
import {TabsModule} from 'ngx-bootstrap/tabs';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {AlertModule} from 'ngx-bootstrap/alert';

@NgModule({
  declarations: [EditDeliveryBatchComponent, ListOrdersForDeliveryComponent, PreviewBatchComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    FormsModule,
    TabsModule,
    ScrollingModule,
    AlertModule,
  ]
})
export class DeliveryModule { }
