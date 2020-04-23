import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-linechart02',
  templateUrl: './linechart02.component.html',
  styleUrls: ['./linechart02.component.scss']
})
export class Linechart02Component implements OnInit {
  chartOptions: {};
  Highcharts = Highcharts;
  data;

  constructor(private service: ServiceService) { }

  ngOnInit(): void {
    this.service.getLineChart02_data().subscribe(data => {
      this.data = data;

      this.chartOptions = {
        chart: {
          type: 'spline'
        },
  
        title: {
          text: '<span style="font-size: smaller; font-family: sans-serif; font-weight: bold;">Case Recoveries and Case Fatalities</span>'
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
            pointInterval: 24 * 3600 * 1000
          }
        },
        
        credits: {
          enabled: false
        },
        
        series: [
          {
            name: 'Case Fatalities',
            color: '#ED7B61',
            data: this.data.Death,
            marker: { radius: 2, symbol: 'circle' }
          }, {
            name: 'Case Recoveries',
            color: '#045848',
            data: this.data.Recovered,
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
