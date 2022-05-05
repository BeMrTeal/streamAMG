import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Platform } from '@angular/cdk/platform';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  tabs: any[] = [];
  matches: any[] = [];
  title: any[] = [];
  radioModel = 'match1.png';
  public isMobile = false;

  constructor(
    private dataService: DataService,
    public platform: Platform,
  ) {
    if (this.platform.IOS) {
      this.isMobile = true;
    } else if (this.platform.ANDROID) {
      this.isMobile = true;
    } else {
      this.isMobile = false;
    }

  }



  ngOnInit(): void {
    this.dataService.getTabData().subscribe((data: any) => {
      this.tabs = data;
      this.title = data[0].title;
      this.matches = data[0].matches;
    });
  }
}
