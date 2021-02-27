import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent implements OnInit {
  @ViewChild('productList',{static:true})
  productList: ProductListComponent;

ngOnInit(): void {
  this.productList.products = [
    {
      name:'Orange',
      price:111
    },
    {
      name:'WaterMelon',
      price:222
    },
    { name:'Coconut',
      price:333
    }
  ];
}
constructor () {}
}

