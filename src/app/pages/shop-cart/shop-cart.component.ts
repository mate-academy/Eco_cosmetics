import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsToBuyService } from 'src/app/services/productsToBuy/products-to-buy.service';
import { Product } from 'src/app/types/product';

@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.scss']
})
export class ShopCartComponent {
  bagItems$: Observable<Product[]> = this.store.getProducts();
  total:number = 0;
  isShowMessage:boolean = false;
  bagItems: Product[] = [];

  constructor(private store: ProductsToBuyService) {
    this.bagItems$.subscribe((bagItems: Product[]) => {
      this.bagItems = this.getCount(bagItems);
      this.total = this.getSum();
    });
  }

  showMessage(event: Event) {
    event.preventDefault();
    this.isShowMessage = true;

    setTimeout(() => {
      this.isShowMessage = false;
    }, 2000)
  }

  getSum() {
    let sum = 0;

    for (const product of this.bagItems) {
      if (product.count) {
        sum += +product.price * product.count;
      }
    }

    return sum;
  }

  getCount(list: Product[]): Product[] {
    const result = [];

    for (const item of list) {
      const newItem = {
        ...item,
        count: 1,
      }

      result.push(newItem);
    }

    return result;
  }

  changeCount(event: Event, item: Product) {
    const target = event.target as HTMLInputElement;
    item.count = Number(target.value);
    this.total = this.getSum();
  }

  remove(number: number) {
    this.store.removeFromList(number);
    this.bagItems$ = this.store.getProducts();
    this.bagItems$.subscribe((bagItems: Product[]) => {
      this.bagItems = this.getCount(bagItems);
      this.total = this.getSum();
    });
  };
}