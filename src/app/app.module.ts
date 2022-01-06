import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule} from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { MatTableModule } from '@angular/material/table';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app.routing.module';
import {MdbTabComponent, MdbTabsComponent, MdbTabsModule} from 'mdb-angular-ui-kit/tabs';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {SortDirective} from './core/directive/sort.directive';




@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SortDirective,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MdbTabsModule,

    NgbModule,

    //MDBBootstrapModule.forRoot()
    //MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
