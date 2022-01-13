import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { IProperty } from 'src/app/models/iproperty';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
  @ViewChild('Form') addPropertyForm: NgForm | undefined;
  @ViewChild('staticTabs', { static: false }) staticTabs?: TabsetComponent;

  propertyTypes: Array<string> = [ 'House', 'Apartment', 'Duplex'];
  furnishTypes: Array<string> = ['Fully', 'Semi', 'Unfurnished'];
  propertyView: IProperty = {
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

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  toBack() {
    this.router.navigate(['/']);
  }
  onSubmit(Form: NgForm) {
    console.log(Form);
  }

  selectTab(tabId: number) {
    if (this.staticTabs?.tabs[tabId]) {
      this.staticTabs.tabs[tabId].active = true;
    }
  }
}
