import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProperty } from 'src/app/models/iproperty';
import { HousingService } from 'src/app/services/housing.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
})
export class PropertyListComponent implements OnInit {
  sellRent: number = 1;
  properties: Array<IProperty> = [];
  constructor(
    private route: ActivatedRoute,
    private housingService: HousingService
  ) {}

  ngOnInit(): void {
    if (this.route.snapshot.url.toString()) {
      this.sellRent = 2;
      console.log('snapshot ', this.sellRent);

    }
    this.housingService.getAllProperties(this.sellRent).subscribe((data) => {
      console.log(this.route.snapshot.url.toString());
      this.properties = data;
    });
  }
}
