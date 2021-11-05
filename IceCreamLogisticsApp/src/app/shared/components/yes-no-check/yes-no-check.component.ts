import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-yes-no-check',
  templateUrl: './yes-no-check.component.html',
  styleUrls: ['./yes-no-check.component.css']
})
export class YesNoCheckComponent {
  @Input()
  public value = false;
  @Output()
  valueChange = new EventEmitter<boolean>();
  @Input()
  public isDisabled = false;

  constructor() {
  }

  toggle(): void {
    this.value = !this.value;
    this.valueChange.emit(this.value);
  }
}
