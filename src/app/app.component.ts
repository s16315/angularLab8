import {Component, OnInit} from '@angular/core';
import {HttpService} from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'http-ex';

  constructor(private service: HttpService) {
  }

  ngOnInit() {
    this.service.getNames().subscribe(
      response => console.log()
    );
    this.service.getConfig().subscribe(
      response => console.log()
    );

  }
}
