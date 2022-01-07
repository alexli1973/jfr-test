import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Input() searchControl: FormControl;
  @Output() onChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }
  public handlerInputChange(ev) {
    this.onChange.emit(ev)
  }


}
