import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ItemListService } from './servies/item-list.service';
import { Router } from '@angular/router';
import { Item } from './model/item-list.model';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})

export class ItemListComponent {
  displayedColumns: string[] = ['name', 'price', 'email' , 'gender','mobile' , 'address'];
  dataSource;
  clickedRows = new Set<Item>();
  constructor(private router: Router,private itemListService:ItemListService) {
  }
  ngOnInit() {
    this.getItemDetails();
  }
  // get item details
  async getItemDetails(){
    this.dataSource = await this.itemListService.getItemDetails();
  }


  logout() {
    this.router.navigate(['/login']);
    sessionStorage.clear();
  }
  
   // reDirect Items
   reDirectItemDetails(item) {
    this.router.navigate(['/item-details',item.id,item]);
  }

}

