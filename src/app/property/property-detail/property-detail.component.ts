import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {

  public propertyId: number = -1;
  constructor(private actRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.propertyId = +this.actRouter.snapshot.params['id'];
    this.actRouter.params.subscribe(
      (params) => {
        this.propertyId = +params['id'];
      }
    )
  }

  toNextProperty() {
    this.propertyId++;
    this.router.navigate(['property-detail', this.propertyId]);
  }
}
