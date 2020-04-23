import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import { ServiceService } from '../service.service';

const colors = ['#F9A883', '#F9CC83', '#F9E283', '#E7F983', '#83F9B1', '#AFF5FA',
 '#D9E8F8', '#E4D9F8', '#E6C0ED', '#EDC0C6', '#CFC3C5']

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.scss']
})
export class PiechartComponent implements OnInit {
  chartOptions: {};
  Highcharts = Highcharts;
  data;

  constructor(private service: ServiceService) { }

  ngOnInit(): void {
    this.service.getPieChart_data().subscribe(data => {
      this.data = data;
      // add color
      for(var i = 0; i < this.data.length; i++){
        this.data[i].color = colors[i];
        console.log(this.data[i])
      }

      this.chartOptions = {
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie'
        },
        title: {
          text: '<span style="font-size: smaller; font-family: sans-serif; font-weight: bold;">Proportion of Cases by Provinces</span>'
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
        tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        accessibility: {
          point: {
            valueSuffix: '%'
          }
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
              enabled: true,
              format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            }
          }
        },
        series: [{
          name: 'Proportion',
          colorByPoint: true,
          data: this.data
        }]
  
      };
    })

  }

}
