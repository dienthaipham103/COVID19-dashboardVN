import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-stacked-bar01',
  templateUrl: './stacked-bar01.component.html',
  styleUrls: ['./stacked-bar01.component.scss']
})
export class StackedBar01Component implements OnInit {
  chartOptions: {};
  Highcharts = Highcharts;
  data;

  constructor(private service: ServiceService) { }

  ngOnInit(): void {
    this.service.getStackedBar01_data().subscribe(data => {
      this.data = data;

      this.chartOptions = {
        chart: {
          type: 'column'
        },
        title: {
          text: '<span style="font-size: smaller; font-family: sans-serif; font-weight: bold;">Confirmed Cases by Provinces</span>'
        },
        exporting: {
          enabled: false,
        },
        legend: {
          reversed: true
        },
  
        credits: {
          enabled: false
        },
        xAxis: {
          categories: ['Confirmed Cases']
        },
        yAxis: {
          min: 0,
          title: {
            text: null
          },
          stackLabels: {
            enabled: true,
            style: {
              fontWeight: 'bold',
              color: ( // theme
                Highcharts.defaultOptions.title.style &&
                Highcharts.defaultOptions.title.style.color
              ) || 'gray'
            }
          }
        },
        tooltip: {
          headerFormat: '<b>{point.x}</b><br/>',
          pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
        },
        plotOptions: {
          column: {
            stacking: 'normal',
            dataLabels: {
              enabled: true
            }
          }
        },
        series: this.data
  
      };
    })

  }

}
