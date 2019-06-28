import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Images } from './images.model';

@Component({
  selector: 'app-web-projects',
  templateUrl: './web-projects.component.html',
  styleUrls: ['./web-projects.component.sass']
})
export class WebProjectsComponent implements OnInit, OnDestroy {

  data: any;
  // url = 'https://vk.com/market-126748903';
  url = 'https://api.coindesk.com/v1/bpi/currentprice.json';
  lessons = ['Lesson 1', 'Lessons 2'];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http
      .get(this.url)
      .subscribe((data) => {
        this.data = data;
      },error => {
        console.log(error.message);
      },() => {
        console.log('completed');
      });

    // this.parsingImages(this.data);
  }

  ngOnDestroy() {
    console.log('web projects has close');
  }

  private parsingImages(srcData) {
    // const htmlElement = document.createElement(srcData);

    // const parser = new DOMParser();
    // const htmlDoc = parser.parseFromString(srcData, 'text/html');

    // const images = htmlDoc.getElementsByClassName('market_row_img');

    console.log(srcData);

/*    this.http
      .get('https://vk.com/market-126748903')
      .subscribe((data: string) => {
        this.data = this.parsingImages(data);
      });*/
  }

}
