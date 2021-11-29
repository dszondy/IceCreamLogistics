import { Component, OnInit } from '@angular/core';
import {InventoryClient, InventoryWarningDto} from '../../api/api';

@Component({
  selector: 'app-inventory-warning',
  templateUrl: './inventory-warning.component.html',
  styleUrls: ['./inventory-warning.component.css']
})
export class InventoryWarningComponent {
  private status: InventoryWarningDto;

  constructor(private inventoryClient: InventoryClient) {
    inventoryClient.getInventoryWarning().subscribe(data => {
      this.status = data;
    });
  }

  isDanger(): boolean {
    return this.status === InventoryWarningDto.NotEnoughForPendingOrders;
  }


  isWarning(): boolean {
    return this.status === InventoryWarningDto.ThresholdReached;
  }


  isNone(): boolean {
    return !this.isWarning() && !this.isDanger();
  }
}
