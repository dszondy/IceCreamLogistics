import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-mixing-item',
  templateUrl: './mixing-item.component.html',
  styleUrls: ['./mixing-item.component.css']
})
export class MixingItemComponent implements OnInit {
  n = 5;
  measurement = "adag";
  recipie = "dinnyés";

  constructor() {
  }

  ngOnInit(): void {
  }

}
