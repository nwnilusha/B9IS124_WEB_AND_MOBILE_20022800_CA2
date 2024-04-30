import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GmapsService {

  constructor() { }

  loadGoogleMaps(): Promise<any>{
    const win = window as any;
    const gModule = win.google;
    if(gModule && gModule.map){
      return Promise.resolve(gModule.maps)
    }
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = 'https://maps.googleapis.com/maps/api/js?key='+environment.googleMapsApiKey+'&libraries=places';
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
      script.onload = () => {
        const loadGoogleModule = win.google;
        if(loadGoogleModule && loadGoogleModule.maps){
          resolve(loadGoogleModule.maps);
          console.log("Google Map loading success")
        } else {
          reject('Google MapSDK is not Available')
        }
      };
    });
  }
}
