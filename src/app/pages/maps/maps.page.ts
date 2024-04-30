import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { GmapsService } from 'src/app/services/gmaps/gmaps.service';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.page.html',
  styleUrls: ['./maps.page.scss'],
})
export class MapsPage implements OnInit {

  @ViewChild('map', {static: true}) mapElementRef: ElementRef;
  googleMaps: any;
  center = {lat: 28.649944693035188, lng: 77.23961776224988};
  map: any;

  constructor(
    private gmaps: GmapsService,
    private renderer: Renderer2
    ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.loadMap();
  }

  async loadMap() {
    try {
      let googleMaps: any = await this.gmaps.loadGoogleMaps();
      this.googleMaps = googleMaps;
      const mapElement = this.mapElementRef.nativeElement;  
      const location = new googleMaps.LatLng(this.center.lat, this.center.lng)
      this.map = new googleMaps.Map(mapElement, {
        center: location,
        zoom: 12,
      });
      this.renderer.addClass(mapElement, 'visible');
    } catch(e) {
      console.log(e)
    }
    
  }

}
