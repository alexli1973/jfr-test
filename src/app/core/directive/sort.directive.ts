import {Directive, EventEmitter, HostListener, Input, Output} from '@angular/core';

@Directive({
  selector: '[colSort]'
})
export class SortDirective {
  @Input() sortingQueryString:string;
  @Input() sortDirection: string;
  sortDirectionUpd: string;
  @Output() sortEvent = new EventEmitter<{}>();

  @HostListener('click')
  sort() {
    this.sortDirectionUpd = this.sortDirection === 'asc' ? 'desc' : 'asc';
    // this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc'; //TODO debug
    this.sortEvent.emit({sortDirection: this.sortDirectionUpd, sortingQueryString: this.sortingQueryString});
  }

  constructor() {}



}
