import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {delay} from 'rxjs/operators';


interface Config {
  key: string;
  name: string;
}

@Injectable()
export class HttpService {
  constructor(private http: HttpClient) {
  }

  getNames() {
    return this.http.get('assets/names.json');
  }

  getConfig(): Observable<Config> {
    return this.http.get<Config>('assets/config.json').pipe(
      delay(2000)
    );
  }
}
