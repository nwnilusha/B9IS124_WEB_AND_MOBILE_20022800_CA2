import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';import { FireserviceService } from 'src/app/fireservice.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  regForm: FormGroup;

  constructor(public alertCtrl:AlertController, public formBuilder:FormBuilder, public loadingCtr:LoadingController, public authService:FireserviceService, public router: Router) { }

  ngOnInit() {
    this.regForm = this.formBuilder.group({
      fullname : ['', [Validators.required]],
      email: ['',[Validators.required, Validators.email, Validators.pattern("[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$")]],
      password: ['', [Validators.required]]
    })
  }

  get errorControl() {
    return this.regForm?.controls;
  }

  async signUp() {
    const loading = await this.loadingCtr.create();
    await loading.present();
    
    if (this.regForm?.valid) {
      const user = await this.authService.registerUser(this.regForm.value.email, this.regForm.value.password).catch((error) => {
        console.log(error);
        loading.dismiss()
        this.showMessage('Create User Error','Try with different username and password')
      })

      if (user){
        loading.dismiss()
        this.router.navigate(['home']);
      } else {
        console.log('Provide valid values');
      }
    }else {
      loading.dismiss()
      this.showMessage('Login Alert', 'Please provide correct Username or Password')
    }
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
