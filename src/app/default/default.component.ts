import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {
  // data;

  constructor(public service: ServiceService) { 
    // console.log(this.service.data);
  }

  ngOnInit(): void {
    // this.service.getGeneralInformation_data().subscribe(data=>{
    //   this.data = data;
    // })
  }

}
