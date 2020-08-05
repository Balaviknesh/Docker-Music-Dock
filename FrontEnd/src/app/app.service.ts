import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

// @ts-ignore
export class AppService {


  constructor(private  http: HttpClient) {
  }

  // tslint:disable-next-line:typedef
  getMusicFiles(){

    return this.http.get('http://localhost:3000/getMusicFiles');

  }

}
