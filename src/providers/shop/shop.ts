import { Injectable } from '@angular/core';

import Parse from 'parse';
@Injectable()
export class ShopProvider extends Parse.Object {
  constructor() {
    super('Shop');
  }

  static load(): Promise<ShopProvider[]> {
    return new Promise((resolve, reject) => {
      let query = new Parse.Query(this);
      query.find().then(resolve, reject);
    });
  }
  

  get name(): string {
    return this.get('name');
  }

  set name(value: string) {
    this.set('name', value);
  }
  get categoryId():Parse.Object{
    return this.get('categoryId');
  }
  set categoryId(value: Parse.Object) {
    this.set('categoryId', value);
  }
  get img():Parse.File{
    return this.get('img').url();
  }
  set img(value: Parse.File){
    this.set('img',value);
  }
}

Parse.Object.registerSubclass('Shop', ShopProvider);