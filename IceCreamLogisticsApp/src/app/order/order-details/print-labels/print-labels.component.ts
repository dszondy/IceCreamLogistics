import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {OrderDetailsDto} from '../../../core/api/api';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {LoginModalComponent} from '../../../core/security/login/login-modal/login-modal.component';

@Component({
  selector: 'app-print-labels',
  templateUrl: './print-labels.component.html',
  styleUrls: ['./print-labels.component.css']
})
export class PrintLabelsComponent{
  @Input()
  order: OrderDetailsDto;

  @Output()
  printChange = new EventEmitter<void>();
  bsModalRef?: BsModalRef;
  template = ViewChild('template');

  constructor() {
  }
}
