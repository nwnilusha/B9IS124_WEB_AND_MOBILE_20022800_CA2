import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  // 'context': selectedLocation.context,
  // 'type': selectedLocation.type,
  // 'address': selectedLocation.address,
  // 'geo': selectedLocation.geo,
  // 'image': selectedLocation.image,
  // 'name': selectedLocation.name,
  // 'tags': selectedLocation.tags,
  // 'telephone': selectedLocation.telephone,
  // 'url': selectedLocation.url,

  context: any
  type: any
  address: any
  geo: any
  image: any
  name: any
  tags: any
  telephone: any
  url: any


  constructor(private router: Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.context = this.activatedRoute.snapshot.queryParamMap.get('context')
    this.type = this.activatedRoute.snapshot.queryParamMap.get('type')
    this.address = this.activatedRoute.snapshot.queryParamMap.get('address')
    this.geo = this.activatedRoute.snapshot.queryParamMap.get('geo')
    this.image = this.activatedRoute.snapshot.queryParamMap.get('image')
    this.name = this.activatedRoute.snapshot.queryParamMap.get('name')
    this.tags = this.activatedRoute.snapshot.queryParamMap.get('tags')
    this.telephone = this.activatedRoute.snapshot.queryParamMap.get('telephone')
    this.url = this.activatedRoute.snapshot.queryParamMap.get('url')
  }

}
