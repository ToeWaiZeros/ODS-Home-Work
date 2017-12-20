import { Injector } from '@angular/core';
import { IonicPage,NavController, LoadingController, ToastController, NavParams,ViewController, ModalController,
  AlertController } from 'ionic-angular';
export abstract class BasePage {

  protected refresher: any;
  protected infiniteScroll: any;
  protected navParams: NavParams;
  protected loader: any;
  protected navCtrl: NavController;
  protected toastCtrl: ToastController;
  protected loadingCtrl: LoadingController;
  protected alertCtrl: AlertController;
  protected modalCtrl: ModalController;
  protected viewCtrl:ViewController;

  constructor(injector: Injector) {
    this.loadingCtrl = injector.get(LoadingController);
    this.toastCtrl = injector.get(ToastController);
    this.navCtrl = injector.get(NavController);
    this.alertCtrl = injector.get(AlertController);
    this.navParams = injector.get(NavParams);
    this.modalCtrl = injector.get(ModalController);
    this.viewCtrl = injector.get(ViewController);
  }
  showModal(page: any,data?:any):Promise<any> {
    return new Promise((resolve,reject)=>{
      let modal = this.modalCtrl.create(page,data);
         modal.onDidDismiss(resolve);
        modal.present();
    });
    
  }
  closeModal(data?: any) {
    this.viewCtrl.dismiss(data);

  }
  showLoading(loadingText:string) {
      this.loader = this.loadingCtrl.create({
        content: loadingText
      });
      this.loader.present();
  }

  hideLoading() {
    this.loader.dismiss();
  }

  onRefreshComplete(data = null) {

    if (this.refresher) {
      this.refresher.complete()
    }

    if (this.infiniteScroll) {
      this.infiniteScroll.complete();

      if (data && data.length === 0) {
        this.infiniteScroll.enable(false);
      } else {
        this.infiniteScroll.enable(true);
      }
    }
  }

  showToast(message: string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    });

    toast.present();
  }

  navigateTo(page: any, params: any = {}) {
    this.navCtrl.push(page, params);
  }

}