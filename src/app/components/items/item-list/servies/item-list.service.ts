import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from '../model/item-list.model';

@Injectable({
  providedIn: 'root'
})
export class ItemListService {
  itemDetails: any;
  constructor(private http: HttpClient) { }

  private itemsUrl = 'http://localhost:3000/';

  // get item details
  getItemDetails() {
    return new Promise((resolve, reject) => {
      this.http.get<Item[]>(`${this.itemsUrl}items`).subscribe((res: any) => {
        if (res) {
          resolve(res);
        }
      }, (err) => {
        reject(err);
      });
    });
  }
}
