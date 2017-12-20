import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the CrudProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CrudProvider {

  constructor(public http: HttpClient) {
    console.log('Hello CrudProvider Provider');
  }
  // static load(): Promise<any []> {
  //   return new Promise((resolve, reject) => {
  //     let query = new Parse.Query(this);
  //     query.find().then(resolve, reject);
  //   });
  // }

}
