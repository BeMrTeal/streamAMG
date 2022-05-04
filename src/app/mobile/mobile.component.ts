import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.scss'],
})
export class MobileComponent implements OnInit {
  tabs: any[] = [];
  matches: any[] = [];
  title: any[] = [];
  radioModel = 'match1.png';

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getTabData().subscribe((data: any) => {
      this.tabs = data;
      this.title = data[0].title;
      this.matches = data[0].matches;
    });
  }
}
