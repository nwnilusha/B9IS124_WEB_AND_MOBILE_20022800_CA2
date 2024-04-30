import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, AlertController } from '@ionic/angular';
import { FireserviceService } from 'src/app/fireservice.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.page.html',
  styleUrls: ['./resetpassword.page.scss'],
})
export class ResetpasswordPage implements OnInit {

  email: any;

  constructor(public alertCtrl:AlertController, public formBuilder:FormBuilder, public loadingCtr:LoadingController, public authService:FireserviceService, public router: Router) { }

  ngOnInit() {
  }



  async resetPassword() {
    const loading = await this.loadingCtr.create();
    await loading.present();
    
    this.authService.resetPassword(this.email).then(() => {
      loading.dismiss()
      this.router.navigate(['login']);
    }).catch(()=>{
      loading.dismiss()
      this.showMessage('Reset Password Error','Please enter correct email address!')
    })
  }
      
  async showMessage(title: string, message: string) {
    let alert = this.alertCtrl.create({
      header: title,
      message: message,
      buttons: ['OK!']
    });

    (await alert).present();
  } 

}
