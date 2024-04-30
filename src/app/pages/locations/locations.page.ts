import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const API_URL = "https://failteireland.azure-api.net/opendata-api/v1/attractions";

@Component({
  selector: 'app-locations',
  templateUrl: './locations.page.html',
  styleUrls: ['./locations.page.scss'],
})
export class LocationsPage implements OnInit {

  locationsList = []

  constructor(public httpClient: HttpClient, private router:Router) {
    this.getLocations().subscribe(results => {
      console.log(results);
      this.locationsList.push(...results[`results`]);
      //console.log(this.locationsList[0])

    })
   }

  ngOnInit() {
  }

  getLocations():Observable<any> {
    return this.httpClient.get(`https://failteireland.azure-api.net/opendata-api/v1/attractions`);
  }

  getDetails(selectedLocation) {
    console.log(selectedLocation)
    const params : NavigationExtras = {
      queryParams: {
        'context': selectedLocation.context,
        'type': selectedLocation.type,
        'address': selectedLocation.address.addressCountry+', '+selectedLocation.address.addressRegion+', '+selectedLocation.address.addressLocality,
        'geo': selectedLocation.geo,
        'image': selectedLocation.image.url,
        'name': selectedLocation.name,
        'tags': selectedLocation.tags[0]+' | '+selectedLocation.tags[1]+' | '+selectedLocation.tags[2],
        'telephone': selectedLocation.telephone,
        'url': selectedLocation.url,
      }
    }
    this.router.navigate(['/details'],params)
  }

}
