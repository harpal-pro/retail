import { Component, OnInit } from '@angular/core';
import { ShopService as ShopService } from '../shop-api.service';
import { PageResponse } from '../PageResponse';
import {Shop} from '../shop';

@Component({
  selector: 'app-list-shops',
  templateUrl: './list-shops.component.html',
  styleUrls: ['./list-shops.component.css']
})


export class ListShopsComponent implements OnInit {
 
  shops : Shop[];
  pageResponse : PageResponse ;
  selectedPage : number = 0;

  constructor(private shopService : ShopService) { 

  }

  ngOnInit() {
    this.getPageResponse(0);

 }

  

  getPageResponse(page:number): void {
    
    this.shopService.getPageResponse(page)
        .subscribe(page => this.pageResponse = page)
  
  }
 

 
  onSelect(page: number): void {
    console.log("selected page : "+page);
    this.selectedPage=page;
    this.getPageResponse(page);
  }
 

}
