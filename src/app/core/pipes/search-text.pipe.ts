import { Pipe, PipeTransform } from '@angular/core';
import {IItem} from '../../models/interfaces';

@Pipe({
  name: 'searchText'
})
export class SearchTextPipe implements PipeTransform {
  transform(items: IItem[], keys: {'isVendor', 'isName', 'isNumber'}, value: string) {

    if (!value) { return items; }
    if (!items) { return []; }

    if (Number(value)) {
      return items.filter(item => item[keys.isNumber].slice(0, 4).includes(value));
    } else {
      return items.filter(item =>
        item.name.toLowerCase().includes(value.toLowerCase()) ||
        item.vendor.toLowerCase().includes(value.toLowerCase())
      );
    }
  }
}
