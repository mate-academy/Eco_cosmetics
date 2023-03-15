import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { goodsFromServer } from 'src/api/goods';
import { Product } from 'src/app/types/product';
import { ProductsToBuyService } from 'src/app/services/productsToBuy/products-to-buy.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {
  id: number = 2;
  product: Product = goodsFromServer.find(p => p.id === this.id) as Product;
  targetImg: string = '';
  bagList: Product[] = [];
  bagList$: Observable<Product[]> = this.productStore.getProducts();
  isProductInCart: Observable<boolean> | undefined;
  
  constructor(
    private route: ActivatedRoute,
    private productStore: ProductsToBuyService,
  ) {}
  
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));
      this.product = goodsFromServer.find(
        item => item.id === this.id
      ) as Product;
      this.targetImg = this.product.image_link[0];
    });

    this.bagList$ = this.productStore.getProducts();

    this.isProductInCart = this.productStore.getProducts().pipe(
      map((bagList: Product[]) => bagList.some(p => p.id === this.product.id))
    );
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

  changeImg(str: string, num: number) {
    const index = this.product.image_link.indexOf(str);

    if (num > 0) {
      if (index === this.product.image_link.length - 1) {
        this.targetImg = this.product.image_link[0];
      } else {
        this.targetImg = this.product.image_link[index + 1];
      }
    } else {
      if (index === 0) {
        this.targetImg = this.product.image_link[this.product.image_link.length - 1];
      } else {
        this.targetImg = this.product.image_link[index - 1];
      }
    }
  }
}
