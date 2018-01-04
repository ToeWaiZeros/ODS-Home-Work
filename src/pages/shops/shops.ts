import { CrudPage } from './../crud/crud';
import { ShopProvider as Shop } from './../../providers/shop/shop';
import  Parse  from 'parse';
import { Component, Injector } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';

import { BasePage } from '../../pages/base/base'
@IonicPage()
@Component({
  selector: 'page-shops',
  templateUrl: 'shops.html',
})
export class ShopsPage extends CrudPage {
  Shops : Shop[];
  searchText :string;
  constructor(injector: Injector ) {
    super(injector);
  }

  ionViewWillEnter() {
    this.onReload();
  }
  
  loadData(refresher?: any) {
    Shop.load()
      .then(data => {
        this.Shops = this.Shops.concat(data);
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
    this.Shops = [];
    this.loadData(refresher);
  }
  getItems(e : any){
    let val = e.target.value
    if(val && val.trim() != ''){
      this.Shops =this.Shops.filter(item=>{
        return (item.name.includes(val));
      })
    }else{
      this.onReload();
    }
    
  }
  
}
