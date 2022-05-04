import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  tabs: any[] = [];
  matches: any[] = [];
  title: any[] = [];
  radioModel = "match1.png"

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getTabData().subscribe((data: any) => {
      this.tabs = data;
      this.title = data[0].title;
      this.matches = data[0].matches;
    });
  }
}
