import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular'
import { ToastController } from '@ionic/angular'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

@Component({
  selector: 'toast-example',
  templateUrl: 'home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class HomePage {


  constructor(public alertController: AlertController, public toastController: ToastController) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Warning!',
      subHeader: 'You rock',
      message: 'This is an alert message.',
      buttons: ['OK']
    });

   alert.present();
  }

  async presentToastWithOptions() {
    const toast = await this.toastController.create({
      header: 'Congratulations',
      message: 'We made a toast',
      position: 'top',
      buttons: [
        {
          side: 'start',
          icon: 'beer',
          text: 'Cheers!',
          handler: () => {
            console.log('Favorite clicked');
          }
        }, {
          text: 'Done',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }   
              ] 
        }
    );
    toast.present();
  }
}


  
  



