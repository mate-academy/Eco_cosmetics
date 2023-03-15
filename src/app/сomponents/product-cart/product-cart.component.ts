import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProductsToBuyService } from 'src/app/services/productsToBuy/products-to-buy.service';
import { Product } from 'src/app/types/product';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.scss']
})
export class ProductCartComponent implements OnInit {
  @Input() product!: Product;
  bagList$: Observable<Product[]> = this.productStore.getProducts();
  isProductInCart: Observable<boolean> | undefined;

  constructor(private productStore: ProductsToBuyService) {}

  ngOnInit() {
    this.bagList$ = this.productStore.getProducts().pipe(
      map(bagList => this.getCount(bagList))
    );

    this.isProductInCart = this.productStore.getProducts().pipe(
      map((bagList: Product[]) => bagList.some(p => p.id === this.product.id))
    );
  }

  getCount(bagList: Product[]): any {
    throw new Error('Method not implemented.');
  }

  addCart(product: Product) {
    this.productStore.addToList(product);
    this.bagList$ = this.productStore.getProducts();
  }

  includesProduct(product: Product): Observable<boolean> {
    return this.productStore.getProducts().pipe(
      map(products => products.some(p => p.id === product.id))
    );
  }

}
