import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';


@Component({
  selector: 'app-small-table',
  templateUrl: './small-table.component.html',
  styleUrls: ['./small-table.component.scss']
})
export class SmallTableComponent implements OnInit {
  displayedColumns: string[] = ['name', 'count'];
  dataSource = [];

  constructor(private service: ServiceService) { }

  ngOnInit(): void {
    this.dataSource =  [
      { name: 'Case Fatility', count: this.service.data.death_rate },
      { name: 'Case Recovered', count: this.service.data.recovered_rate }
    ]
  }

}
