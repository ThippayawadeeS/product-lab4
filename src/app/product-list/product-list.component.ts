import { Component, OnInit, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { Product } from '../product';
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    @ViewChildren(ProductItemComponent)
    produtItem: QueryList<ProductItemComponent>;

    products: Product[];

  constructor() {
      this.products = [];
  }

  ngOnInit() {}
  selectedProduct(productComponent: ProductItemComponent) {
      alert(`Product ${productComponent.product.name} selected`);
      this.produtItem.forEach(p => {
          p.isSelected = false;
      });
      productComponent.isSelected = true;
    }
}
