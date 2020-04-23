import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-linechart01',
  templateUrl: './linechart01.component.html',
  styleUrls: ['./linechart01.component.scss']
})
export class Linechart01Component implements OnInit {
  chartOptions: {};
  Highcharts = Highcharts;
  data;

  constructor(private service: ServiceService) { }

  ngOnInit(): void {
    this.service.getLineChart01_data().subscribe(data => {
      this.data = data;
      console.log(this.data)

      this.chartOptions = {
        chart: {
          type: 'spline'
        },
  
        title: {
          text: '<span style="font-size: smaller; font-family: sans-serif; font-weight: bold;">Active Confirmed and Total Confirmed Cases</span>'
        },
  
        exporting: {
          enabled: false,
        },
  
        legend: {
          reversed: true
        },
  
        xAxis: {
          type: 'datetime',
          labels: {
            format: '{value:%d.%m.%y}'
          }
        },
  
        yAxis: {
          title: false
        },
  
        plotOptions: {
          series: {
            label: {
              connectorAllowed: false
            },
            pointStart: Date.UTC(2020, 0, 22),
            pointInterval: 24 * 3600 * 1000 // one day
          }
        },
        credits: {
          enabled: false
        },
  
        series: [
          {
            name: 'Active Confirmed Cases',
            color: '#F0E538',
            data: this.data.active,
            marker: { radius: 2, symbol: 'circle' }
          }, {
            name: 'Confirmed Cases',
            color: '#5206b8',
            data: this.data.cases,
            marker: { radius: 2, symbol: 'circle' }
          }
        ],
  
        responsive: {
          rules: [{
            condition: {
              maxWidth: 500
            },
            chartOptions: {
              legend: {
                layout: 'horizontal',
                align: 'center',
                verticalAlign: 'bottom'
              }
            }
          }]
        }
  
      };
    })

  }

}
