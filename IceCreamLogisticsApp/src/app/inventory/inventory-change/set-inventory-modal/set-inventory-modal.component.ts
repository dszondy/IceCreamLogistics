import {Component, Input, OnInit} from '@angular/core';
import {InventoryClient, InventoryStatusDto} from '../../../core/api/api';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-set-inventory-modal',
  templateUrl: './set-inventory-modal.component.html',
  styleUrls: ['./set-inventory-modal.component.css']
})
export class SetInventoryModalComponent implements OnInit {

  @Input()
  item: InventoryStatusDto;
  completionSubject = new Subject<any>();
  completionObservable = this.completionSubject.asObservable();
  quantity: number;
  constructor(private inventoryClient: InventoryClient) { }

  ngOnInit(): void {
    this.quantity = this.item?.amountOnHand / this.item?.quantityPerPackage;
  }

  submit(): void {
    this.inventoryClient.setInventory(this.item.id, this.quantity  * this.item.quantityPerPackage)
      .subscribe((x) => {
      this.item.amountOnHand = x.amountOnHand;
      this.completionSubject.next();
    });
  }
}
