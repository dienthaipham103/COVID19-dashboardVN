import { Component, OnInit } from '@angular/core';
import * as Highcharts from "highcharts/highmaps";
import mapdata from "./mapdata";
import * as Vietnam from '@highcharts/map-collection/countries/vn/vn-all.geo.json';
import { ServiceService } from '../service.service';

mapdata(Highcharts);


@Component({
  selector: 'app-map-collection',
  templateUrl: './map-collection.component.html',
  styleUrls: ['./map-collection.component.scss']
})
export class MapCollectionComponent implements OnInit {
  data;
  title = "app";
  chart;
  updateFromInput = false;
  Highcharts = Highcharts;
  chartConstructor = "mapChart";
  chartCallback;
  chartOptions = {};

  constructor(private service: ServiceService) {
    const self = this;

    this.chartCallback = chart => {
      self.chart = chart;
    };
  }

  ngOnInit(): void {
    this.service.getMapCollection_data().subscribe(data => {
      this.data = data;
      console.log(this.data);
      this.chartOptions = {
        chart: {
          map: require('@highcharts/map-collection/countries/vn/vn-all.geo.json')
        },
        title: {
          text: '<span style="font-size: smaller; font-family: sans-serif; font-weight: bold;">Confirmed Cases by Provinces</span>'
        },
        credits: {
          enabled: false
        },
        mapNavigation: {
          enabled: true,
          buttonOptions: {
            alignTo: 'spacingBox'
          }
        },
        colorAxis: {
          min: 0,
          maxColor: '#3F0777'
        },
        series: [{
          name: 'Confirmed Cases',
          states: {
            hover: {
              color: '#ECF9E3'
            }
          },
          dataLabels: {
            enabled: true,
            format: '{point.name}'
          },
          allAreas: false,
          data: this.data
        },
          // {
          //   name: 'Provinces',
          //   nullColor: '#045848',
          //   enableMouseTracking: false
          // }
        ]
      };
    })
  }

}
