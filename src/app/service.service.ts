import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Table01Item } from './table01/table01-datasource';

export interface GeneralInformation {
  case: number,
  active: number,
  recovered: number,
  death: number,
  death_rate: number,
  recovered_rate: number
}

export interface LineChart01{
  cases: number[],
  active: number[]
}

export interface LineChart02{
  Death: number[],
  Recovered: number[]
}

export interface LineChart03{
  Daily_case: number[],
  Daily_death: number[],
  Daily_recovered: number[]
}

export interface StackedArea{
  Active: number[],
  Death: number[],
  Recovered: number[]
}

export interface PieChart{
  name: string,
  y: number,
  color?: string
}

export interface StackedBar{
  name: string,
  data: number[],
  color?: string
}

// export interface MapCollection{

// }

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  data: GeneralInformation;

  constructor(private http: HttpClient) {
    this.generalInformation();
  }

  general_information_url: string = "https://api.corona.ngothithanhtruc.com/vn/general_infomation";
  getGeneralInformation_data(): Observable<GeneralInformation> {
    return this.http.get<GeneralInformation>(this.general_information_url);
  }
  generalInformation() {
    this.getGeneralInformation_data().subscribe(data => {
      this.data = data;
    })
  }

  linechart01_url: string = "https://api.corona.ngothithanhtruc.com/vn/linechart01";
  getLineChart01_data():  Observable<LineChart01>{
    return this.http.get<LineChart01>(this.linechart01_url);
  }

  linechart02_url: string = "https://api.corona.ngothithanhtruc.com/vn/linechart02";
  getLineChart02_data():  Observable<LineChart02>{
    return this.http.get<LineChart02>(this.linechart02_url);
  }

  linechart03_url: string = "https://api.corona.ngothithanhtruc.com/vn/linechart03";
  getLineChart03_data():  Observable<LineChart03>{
    return this.http.get<LineChart03>(this.linechart03_url);
  }

  stacked_area_url: string = "https://api.corona.ngothithanhtruc.com/vn/stacked-area";
  getStackedArea_data():  Observable<StackedArea>{
    return this.http.get<StackedArea>(this.stacked_area_url);
  }

  piechart_url: string = "https://api.corona.ngothithanhtruc.com/vn/pie-chart";
  getPieChart_data():  Observable<PieChart[]>{
    return this.http.get<PieChart[]>(this.piechart_url);
  }

  stackedbar01_url: string = "https://api.corona.ngothithanhtruc.com/vn/pie-chart01";
  getStackedBar01_data():  Observable<StackedBar[]>{
    return this.http.get<StackedBar[]>(this.stackedbar01_url);
  }

  stackedbar02_url: string = "https://api.corona.ngothithanhtruc.com/vn/pie-chart02";
  getStackedBar02_data():  Observable<StackedBar[]>{
    return this.http.get<StackedBar[]>(this.stackedbar02_url);
  }

  stackedbar03_url: string = "https://api.corona.ngothithanhtruc.com/vn/pie-chart03";
  getStackedBar03_data():  Observable<StackedBar[]>{
    return this.http.get<StackedBar[]>(this.stackedbar03_url);
  }

  mapcollection_url: string = "https://api.corona.ngothithanhtruc.com/vn/map-collection";
  getMapCollection_data():  Observable<[]>{
    return this.http.get<[]>(this.mapcollection_url);
  }

  table_url: string = "https://api.corona.ngothithanhtruc.com/vn/table";
  getTable_data():  Observable<Table01Item[]>{
    return this.http.get<Table01Item[]>(this.table_url);
  }
  
}
