import { CrudPage } from './../crud/crud';
import { CategoryProvider as Category } from './../../providers/category/category';
import  Parse  from 'parse';
import { Component, Injector } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';

import { BasePage } from '../../pages/base/base'
@IonicPage()
@Component({
  selector: 'page-categories',
  templateUrl: 'categories.html',
})
export class CategoriesPage extends CrudPage {
  categories : Category[];
  searchText :string;
  constructor(injector: Injector ) {
    super(injector);
  }

  ionViewWillEnter() {
    this.onReload();
  }
  
  loadData(refresher?: any) {
    Category.load()
      .then(data => {
        this.categories = this.categories.concat(data);
        refresher.complete();
      })
      .catch(error => {
        console.error(error);
      });
  }
  openModal(page:any,data?:any){
    this.showModal(page,data).then(data=>{
      if(data) this.onReload();
    });
  }
  onReload(refresher?: any) {
    this.categories = [];
    this.loadData(refresher);
  }
  getItems(e : any){
    let val = e.target.value
    if(val && val.trim() != ''){
      this.categories =this.categories.filter(item=>{
        return (item.name.includes(val));
      })
    }else{
      this.onReload();
    }
    
  }
  
}
