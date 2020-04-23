import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-stacked-area',
  templateUrl: './stacked-area.component.html',
  styleUrls: ['./stacked-area.component.scss']
})
export class StackedAreaComponent implements OnInit {
  chartOptions: {};
  Highcharts = Highcharts;
  data;

  constructor(private service: ServiceService) { }

  ngOnInit(): void {
    this.service.getStackedArea_data().subscribe(data => {
      this.data = data;
      console.log(this.data);

      this.chartOptions = {
        chart: {
          type: 'area'
        },

        title: {
          text: '<span style="font-size: smaller; font-family: sans-serif; font-weight: bold;">Active Cases, Case Fatalities and Case Recovered</span>'
        },

        exporting: {
          enabled: false,
        },

        legend: {
          reversed: true
        },

        xAxis: {
          // categories: ['1750', '1800', '1850', '1900', '1950', '1999', '2050'],
          // tickmarkPlacement: 'on',
          // title: {
          //   enabled: false
          // },
          type: 'datetime',
          labels: {
            format: '{value:%d.%m.%y}'
          }
        },

        yAxis: {
          title: {
            text: null
          },
          // labels: {
          //   formatter: function () {
          //     return this.value / 1000;
          //   }
          // }
        },

        credits: {
          enabled: false
        },

        tooltip: {
          split: true,
          // valueSuffix: ' millions'
        },

        plotOptions: {
          area: {
            stacking: 'normal',
            lineColor: '#666666',
            lineWidth: 1,
            marker: {
              lineWidth: 1,
              lineColor: '#666666'
            }
          },
          series: {
            label: {
              connectorAllowed: false
            },
            pointStart: Date.UTC(2020, 0, 22),
            pointInterval: 24 * 3600 * 1000 // one day
          }
        },

        series: [
          {
            name: 'Active',
            data: this.data.Active,
            marker: { radius: 3, symbol: 'circle' },
            color: '#FAFBC2'
          },
          {
            name: 'Death',
            data: this.data.Death,
            marker: { radius: 3, symbol: 'circle' },
            color: '#F9AC8B'
          },
          {
            name: 'Recovered',
            data: this.data.Recovered,
            marker: { radius: 3, symbol: 'circle' },
            color: '#C5F7CF'
          }
        ]

      };
    })

  }

}
