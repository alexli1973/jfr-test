import {Component, OnDestroy, OnInit} from '@angular/core';
import { Subscription } from "rxjs";

import { ApiService } from "../core/services/api.service";
import { IItem, ITab } from "../models/interfaces";
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  private initDataSubs = new Subscription();
  public initData: ITab[] = [];
  public tableTabs: string[] = [];
  public tableHeader: string[] = [];
  public currentTabBody: IItem[] = [];
  public sortDirection: string = 'asc'
  public sortingQueryString: string = null;
  public selectedTab: string = '';
  public searchText: string;

  public searchControl:FormControl = new FormControl('');

  private compare = (v1: string | number, v2: string | number) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.initDashboard();
  }

  ngOnDestroy(): void {
    if (this.initDataSubs) {
      this.initDataSubs.unsubscribe();
    }
  }

  private initDashboard() {
    this.initDataSubs = this.apiService.getAllData().subscribe((data: ITab[]) => {
      this.initData = data;
      data.map((tab: ITab, index) => {

        if (index === 0) {
          this.tableHeader = Object.keys(data[index].items[index]);
          this.displayActiveTabBody(data[index].title);
        }

        this.tableTabs.push(tab.title);
      })
    })
  }


  public displayActiveTabBody(title: string) {
    const tempTabExists = this.initData.find((elem:ITab) => elem.title === title);
      if (tempTabExists) {
        this.currentTabBody = [...tempTabExists.items];
        this.selectedTab = title;
      }
      this.sortEventHandler({
        sortDirection: 'asc',
        sortingQueryString: 'vendor'
      });
      this.resetControlValue();
  }

  public sortEventHandler(ev) {
    this.sortDirection = ev.sortDirection;
    this.sortingQueryString = ev.sortingQueryString;
    this.currentTabBody = this.currentTabBody.sort((a:IItem, b:IItem) => {
      let x = a[this.sortingQueryString];
      let y = b[this.sortingQueryString];

      if (typeof x === 'string') {
        x = x.toLowerCase();
        y = y.toLowerCase();
      }

      const res = this.compare(x, y);
      return this.sortDirection === 'asc' ? res : -res;
    });

  }

  public handlerInputChange(ev) {
    this.searchText = ev;
  }

  public resetControlValue() {
    this.searchControl.setValue(null);
  }


}
