import {Component, Input, OnInit} from '@angular/core';
import {InventoryClient, InventoryStatusDto} from '../../../core/api/api';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-add-inventory-modal',
  templateUrl: './add-inventory-modal.component.html',
  styleUrls: ['./add-inventory-modal.component.css']
})
export class AddInventoryModalComponent implements OnInit {
  @Input()
  item: InventoryStatusDto;
  completionSubject = new Subject<any>();
  completionObservable = this.completionSubject.asObservable();
  quantity = 0;
  constructor(private inventoryClient: InventoryClient) { }

  ngOnInit(): void {
  }

  submit(): void {
    this.inventoryClient.addToInventory(this.item.id, this.quantity  * this.item.quantityPerPackage)
      .subscribe((x) => {
        this.item.amountOnHand = x.amountOnHand;
        this.completionSubject.next();
      });
  }
}
