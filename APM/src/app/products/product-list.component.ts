import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  //styleUrls: ['./products.component.css']
})
export class ProductListComponent {
  pageTitle : string = "Product List";
  imageWidth : number = 100;
  imageMargin : number = 2;
  products : any[] = [
    {
      "lol":"say whaaaaat?",
    "price":5.99,
    "imageUrl" : "https://qacvmanager.azurewebsites.net/api/user/2/picture/download"
    },
    {
      "lol":"naaaaaah",
      "price":"2.7",
      "imageUrl" : "https://qacvmanager.azurewebsites.net/api/user/3/picture/download"
    }
  ];
}
