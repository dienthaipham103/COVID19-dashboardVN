import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultComponent } from './default/default.component';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { SmallTableComponent } from './small-table/small-table.component';
import { Linechart01Component } from './linechart01/linechart01.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { MapCollectionComponent } from './map-collection/map-collection.component';
import { Linechart02Component } from './linechart02/linechart02.component';
import { Linechart03Component } from './linechart03/linechart03.component';
import { StackedAreaComponent } from './stacked-area/stacked-area.component';
import { PiechartComponent } from './piechart/piechart.component';
import { StackedBar01Component } from './stacked-bar01/stacked-bar01.component';
import { StackedBar02Component } from './stacked-bar02/stacked-bar02.component';
import { StackedBar03Component } from './stacked-bar03/stacked-bar03.component';
import { Table01Component } from './table01/table01.component';
import { ServiceService } from './service.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent,
    SmallTableComponent,
    Linechart01Component,
    MapCollectionComponent,
    Linechart02Component,
    Linechart03Component,
    StackedAreaComponent,
    PiechartComponent,
    StackedBar01Component,
    StackedBar02Component,
    StackedBar03Component,
    Table01Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    FlexLayoutModule,
    RouterModule,
    MatSidenavModule,
    MatDividerModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    HighchartsChartModule,
    HttpClientModule
  ],
  providers: [
    ServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
