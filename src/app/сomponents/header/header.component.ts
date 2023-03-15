import { Component, OnInit } from '@angular/core';
import { ProductsToBuyService } from 'src/app/services/productsToBuy/products-to-buy.service';
import { Product } from 'src/app/types/product';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  bagList: Product[] = [];

  constructor(private store: ProductsToBuyService) { }

  ngOnInit() {
    this.store.getProducts().subscribe(products => {
      this.bagList = products;
    });
  }
}
