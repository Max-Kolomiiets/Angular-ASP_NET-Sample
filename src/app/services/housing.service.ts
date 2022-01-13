import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IProperty } from '../models/iproperty';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  constructor(private http: HttpClient) {}

  getAllProperties(sellRent: number): Observable<Array<IProperty>> {
    return this.http.get('data/properties.json').pipe(
      map((data) => {
        const arr: Array<IProperty> = [];
        for (const [key, value] of Object.entries(data)) {
          let srent = Number((value as IProperty).SellRent);

          if (srent === sellRent) {
            arr.push(value);
          }
        }
        return arr;
      })
    );
  }
}
