import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Client} from '../../../core/api/api';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {
  @Output()
  public clientChange = new EventEmitter();

  @Input()
  public client: Client;

  constructor() {
  }

  ngOnInit(): void {
  }

  changeClient(): void {
    this.clientChange.emit();
  }
}
