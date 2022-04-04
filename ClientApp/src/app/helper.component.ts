import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HelperComponent {

  private http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  public async callApi(apiPath) {

    let result = await this.http.get("http://127.0.0.1:5000/api/" + apiPath).toPromise();
    return JSON.stringify(result, null, 2);
   
  }

  public async postToAPi(apiPath, data) {

    let result = await this.http.post("http://127.0.0.1:5000/api/" + apiPath, data).toPromise();
    return JSON.stringify(result, null, 2);

  }
}
