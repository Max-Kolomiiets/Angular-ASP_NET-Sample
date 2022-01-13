import { Component, Input, OnInit } from '@angular/core';
import { IProperty } from 'src/app/models/iproperty';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css'],
})
export class PropertyCardComponent implements OnInit {
  @Input() property: IProperty = {
    Description: '',
    Id: 0,
    SellRent: 0,
    Name: '',
    PType: '',
    FType: '',
    Price: 0,
    BHK: 0,
    BuiltArea: 0,
    City: '',
    RTM: 0
  };

  constructor() {}

  ngOnInit(): void {}
}
