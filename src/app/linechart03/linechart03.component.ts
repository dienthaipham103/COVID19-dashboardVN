import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-linechart03',
  templateUrl: './linechart03.component.html',
  styleUrls: ['./linechart03.component.scss']
})
export class Linechart03Component implements OnInit {
  chartOptions: {};
  Highcharts = Highcharts;
  data;

  constructor(private service: ServiceService) { }

  ngOnInit(): void {
    this.service.getLineChart03_data().subscribe(data => {
      this.data = data;

      this.chartOptions = {
        chart: {
          type: 'spline'
        },
  
        title: {
          text: '<span style="font-size: smaller; font-family: sans-serif; font-weight: bold;">Daily Increase in Confirmed Cases, Case Fatalities and Case Recovered</span>'
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
            pointStart: Date.UTC(2020, 0, 23),
            pointInterval: 24 * 3600 * 1000
          }
        },
  
        credits: {
          enabled: false
        },
  
        series: [
          {
            name: 'Daily Death',
            color: '#ED7B61',
            data: this.data.Daily_death,
            marker: { radius: 2, symbol: 'circle' }
          },
          {
            name: 'Daily Recovered',
            color: '#045848',
            data: this.data.Daily_recovered,
            marker: { radius: 2, symbol: 'circle' }
          },
          {
            name: 'Daily Cases',
            color: '#5206b8',
            data: this.data.Daily_case,
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
