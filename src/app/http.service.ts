import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class HttpService {
  constructor(private http: HttpClient) {
  }

  getNames() {
    return this.http.get('assets/names.json');
  }

  getConfig() {
    return this.http.get('assets/config.json');
  }
}
