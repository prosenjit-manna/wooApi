import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';

@Component({
  selector: 'aa-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit() {
    this.homeService.getUsers().subscribe(res => {
      console.log(res);
    });
  }

}
