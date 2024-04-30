import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FireserviceService } from 'src/app/fireservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(public router:Router,public authService:FireserviceService) { }

  ngOnInit() {
  }

  async logOut() {
    this.authService.logout().then(() => {
      this.router.navigate(['login']);
    })
  }

  locations() {
    this.router.navigate(['locations']);
  }

  weather() {
    this.router.navigate(['weather']);
  }

  maps() {
    this.router.navigate(['maps']);
  }

  camera() {
    this.router.navigate(['camera']);
  }

}
