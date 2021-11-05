import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-add-check',
  templateUrl: './add-check.component.html',
  styleUrls: ['./add-check.component.css']
})
export class AddCheckComponent implements OnInit {
  @Input()
  public checked: boolean = false;
  @Output()
  checkedChange = new EventEmitter<boolean>();

  constructor() {
  }

  ngOnInit(): void {
  }

  toggle(): void {
    this.checked = !this.checked;
    this.checkedChange.emit(this.checked);
  }
}
