import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Table01DataSource, Table01Item } from './table01-datasource';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-table01',
  templateUrl: './table01.component.html',
  styleUrls: ['./table01.component.scss']
})
export class Table01Component implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<Table01Item>;
  dataSource: Table01DataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'province', 'cases', 'active', 'deaths', 'recovered', 'active_rate', 'death_rate', 'recovered_rate'];

  constructor(private service: ServiceService){}

  ngOnInit() {
    this.dataSource = new Table01DataSource(this.service);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
