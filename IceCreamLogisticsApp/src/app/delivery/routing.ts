import {Routes} from '@angular/router';
import {EditDeliveryBatchComponent} from './edit-delivery-batch/edit-delivery-batch.component';
import {ListDeliveriesComponent} from './list-deliveries/list-deliveries.component';

export const routes: Routes = [
  {
    path: 'new',
    component: EditDeliveryBatchComponent
  },
  {
    path: ':id',
    component: EditDeliveryBatchComponent
  },
  {
    path: '',
    component: ListDeliveriesComponent
  }
  ];
