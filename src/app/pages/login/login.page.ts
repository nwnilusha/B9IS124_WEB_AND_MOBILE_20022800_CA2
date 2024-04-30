import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, AlertController } from '@ionic/angular';
import { FireserviceService } from 'src/app/fireservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;

   constructor(public alertCtrl:AlertController, private router: Router, public formBuilder:FormBuilder, public loadingCtr:LoadingController, public authService:FireserviceService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['',[Validators.required, Validators.email, Validators.pattern("[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$")]],
      password: ['', [Validators.required]]
      // password: ['', [Validators.required, Validators.pattern("(?=.*\d)(?=.*[a-z])(?=.*[0-8])(?=.*[A-Z]).{8,}")]]
    })
  }

  get errorControl() {
    return this.loginForm?.controls;
  }

  async login() {
    const loading = await this.loadingCtr.create();
    await loading.present();
    if (this.loginForm?.valid) {
      const user = await this.authService.loginUser(this.loginForm.value.email, this.loginForm.value.password).catch((error) => {
        console.log(error);
        loading.dismiss()
        this.showMessage('Login Alert', 'Username or Password Incorrect')
      })

      if (user){
        loading.dismiss()
        this.router.navigate(['home']);
      } else {
        console.log('Provide valid values');
      }
    } else {
      loading.dismiss()
      this.showMessage('Login Alert', 'Please provide correct Username or Password')
    }
  }

  register() {
    this.router.navigate(['register']);
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
