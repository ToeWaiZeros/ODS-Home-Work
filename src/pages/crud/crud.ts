import { Injector } from '@angular/core';
import { BasePage } from '../../pages/base/base'
export class CrudPage extends BasePage {

  constructor(injector: Injector) {
    super(injector);
  }

  onCreate(pName: any) {
    console.log(pName);
    pName.save().then(
      data => {
        this.closeModal(data);
      },
      error => {
        console.error(error);
      }
    );
  }

  onUpdate(updateData: any) {
    updateData.save().then(
      data => {
        this.closeModal(data);
      },
      error => {
        console.error(error);
      }
    )
  }

  onDelete(deleteData) {
    deleteData.destroy().then(
      data => {
        this.closeModal(data);
      },
      error => {
        console.error(error);
      }
    );
  }
}
