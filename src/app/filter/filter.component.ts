import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {

 @Input() all: number = 0;
 @Input() sale: number = 0;
 @Input() outOfOrder: number = 0;

 selectedRadioButtonValue: string = 'All';

 @Output() filterRadioChanged: EventEmitter<string> = new EventEmitter<string>

 onRadioSelectChanged() {
  this.filterRadioChanged.emit(this.selectedRadioButtonValue);
  // console.log(this.selectedRadioButtonValue)
 }
}
