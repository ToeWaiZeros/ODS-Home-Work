import { Component, Injector } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import Parse from 'parse';
import { CrudPage } from './../crud/crud';
import { CategoryProvider as Category } from './../../providers/category/category';
import { ShopProvider as Shop } from '../../providers/shop/shop';
@IonicPage()
@Component({
  selector: 'page-shop',
  templateUrl: 'shop.html',
})
export class ShopPage extends CrudPage {
  Shop: any;
  updateShop: any;
  title: string;
  categories: Category[];
  isEditView: boolean = false;

  constructor(injector: Injector) {
    super(injector);
    if (this.navParams.get('Shop')) {
      this.isEditView = true;
      this.Shop = this.navParams.get('Shop');
      console.log(this.Shop)
    } else {
      this.Shop = new Shop();
      this.Shop.categoryId = new Parse.Object;
      this.Shop.categoryId.className = "Category";
      this.Shop.categoryId.id = "";
      this.Shop.img = new Parse.File('0.jpg',{base64:"V29ya2luZyBhdCBQYXJzZSBpcyBncmVhdCE="})
    }
    this.loadCategory();
    this.updateShop = new Shop();
  }

  loadCategory(refresher?: any) {
    this.categories = [];
    Category.load()
      .then(data => {
        this.categories = this.categories.concat(data);
        refresher.complete();
      })
      .catch(error => {
        console.error(error);
      });
  }
  getImg(event) {
    console.log(event)
    console.log(this.Shop.img)
    this.Shop.img = new Parse.File(event.srcElement.files[0].name,event.srcElement.files[0])
    // let fd = new FormData();
    // fd.append('file', event.srcElement.files[0]);
    // console.log(event)
  }
  onUpdate1() {
    console.log(this.Shop)
    this.Shop.save(this.Shop).then(data => {
      this.closeModal(data);
    },
      error => {
        console.error(error);
      }
    )
  }
}
