import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from '../core/dashboard/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
  path: 'orders',
  loadChildren: () => import('../order/order.module').then(m => m.OrderModule)
  },
  {
    path: 'manufacturing',
    loadChildren: () => import('../manufacturing/manufacturing.module').then(m => m.ManufacturingModule)
  },
  {
    path: 'delivery',
    loadChildren: () => import('../delivery/delivery.module').then(m => m.DeliveryModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('../admin-settings/admin-settings.module').then(m => m.AdminSettingsModule)
  },
  {
    path: 'inventory',
    loadChildren: () => import('../inventory/inventory.module').then(m => m.InventoryModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingRoutingModule {
}
