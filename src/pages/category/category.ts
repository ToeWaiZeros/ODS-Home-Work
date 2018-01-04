import { CrudPage } from './../crud/crud';
import { Component, Injector } from '@angular/core';
import { IonicPage } from 'ionic-angular';

import { CategoryProvider as Category } from '../../providers/category/category'
@IonicPage()
@Component({
  selector: 'page-category',
  templateUrl: 'category.html',
})
export class CategoryPage extends CrudPage {
  category: any;
  updateCategory : any;
  title: string;
  isEditView: boolean = false;
  constructor(injector: Injector) {
    super(injector);
    if (this.navParams.get('category')) {
      this.isEditView = true;
      this.category = this.navParams.get('category');
    } else {
      this.category = new Category();
    }
    this.updateCategory = new Category();
  }
 
  ionViewWillEnter() {

  }
}
