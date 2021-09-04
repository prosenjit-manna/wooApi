import { Component, OnInit } from '@angular/core';
import { ApiIndexService } from 'projects/ngx-wooapi/src/lib';

@Component({
  selector: 'app-api-index',
  templateUrl: './api-index.component.html',
  styleUrls: ['./api-index.component.scss']
})
export class ApiIndexComponent implements OnInit {
   response: any;
  
  constructor(
    private apiIndexService: ApiIndexService
  ) { }

  ngOnInit() {
    this.apiIndexService.getIndex().subscribe(response => {
      console.log(response);
      this.response = response;
    }, err => {
      console.log(err);
    });
  }
}
