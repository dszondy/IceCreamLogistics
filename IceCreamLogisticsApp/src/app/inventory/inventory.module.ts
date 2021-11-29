import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryComponent } from './inventory/inventory.component';
import {RouterModule} from '@angular/router';
import {routes} from './routing';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { SetInventoryModalComponent } from './inventory-change/set-inventory-modal/set-inventory-modal.component';
import { AddInventoryModalComponent } from './inventory-change/add-inventory-modal/add-inventory-modal.component';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [InventoryComponent, SetInventoryModalComponent, AddInventoryModalComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ScrollingModule,
    FontAwesomeModule,
    FormsModule
  ]
})
export class InventoryModule { }
