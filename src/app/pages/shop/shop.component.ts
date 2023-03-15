import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from 'src/app/types/product.js';
import { goodsFromServer } from 'src/api/goods';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsToBuyService } from 'src/app/services/productsToBuy/products-to-buy.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent {
  productsFromServer: Product[] = [];
  isLoading = false;
  inputValue: string = '';
  selectValue: number = 3;
  correctList: Product[] = [];
  visibleProducts: Product[] = [];

  paginFirstItem: number = 1;
  paginLastItem: number = 0;
  currentPage: number = 1;
  currectListOfPagin: number[] = [];
  paginList: number[] = [];
  start: number = 0;
  end: number = 0;

  bagList: Observable<Product[]> = this.store.getProducts();;
  
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: ProductsToBuyService
  ) {
    this.getProducts();
    this.bagList = store.getProducts();
  }

  getProducts() {
    this.isLoading = true;

    setTimeout(() => {
      this.productsFromServer = goodsFromServer as Product[];
      this.correctList = this.productsFromServer;
      this.getNewStartVsEnd();
      this.visibleProducts = this.correctList.slice(this.start, this.end);
      this.isLoading = false;
    }, 2000)
  }

  getNewStartVsEnd() {
    const startIndex = (this.currentPage - 1) * this.selectValue;
    const endIndex = startIndex + this.selectValue;
  
    this.start = startIndex;
    this.end = endIndex > this.correctList.length ? this.correctList.length : endIndex;
    this.paginList = this.getPagination(Math.ceil(this.correctList.length / this.selectValue));
    this.currectListOfPagin = this.getPagin();
  }

  handleChange(event: Event) {
    const target = event.target;

    if (target instanceof HTMLInputElement) {
      this.currentPage = 1;
      this.inputValue = target.value.trim();
      this.correctList = this.productsFromServer.filter(p => (p.name.toLowerCase()).includes(this.inputValue.toLowerCase()));
      this.router.navigate([], {
        relativeTo: this.route,
        queryParams: { query: this.inputValue ? this.inputValue : null },
        queryParamsHandling: 'merge'
      });
    } else if (target instanceof HTMLSelectElement) {
      this.currentPage = 1;
      this.selectValue = +target.value;
      this.router.navigate([], {
        relativeTo: this.route,
        queryParams: { count: this.selectValue !== 3 ? this.selectValue : null },
        queryParamsHandling: 'merge'
      });
    }

    this.getNewStartVsEnd();
    this.visibleProducts = this.correctList.slice(this.start, this.end);
  }

  getPagination(num: number): number[] {
    const arr = [];

    for (let i = 1; i <= num; i++) {
      arr.push(i);
    }

    this.paginLastItem = arr[arr.length - 1];

    return arr;
  }

  getPagin() {
    const index = this.paginList.indexOf(this.currentPage);

    switch (index) {
      case 0:
        return this.paginList.slice(0, index + 4);

      case 1:
        return this.paginList.slice(0, index + 3);

      case this.paginList.length - 3:
        return this.paginList.slice(index - 1, index + 3);

      case this.paginList.length - 2:
        return this.paginList.slice(index - 2, index + 2);

      case this.paginList.length - 1:
        return this.paginList.slice(index - 3);

      default:
        break;
    }

    if (index <= this.paginList.length - 3) {
      return this.paginList.slice(index - 1, index + 2);
    }

    return this.paginList;
  }

  changeCurrentPage(num: number) {
    this.currentPage = num;
    this.getNewStartVsEnd();
    this.currectListOfPagin = this.getPagin();
    this.visibleProducts = this.productsFromServer.slice(this.start, this.end);
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { page: this.currentPage !== 1 ? this.currentPage : null },
      queryParamsHandling: 'merge'
    });
  }
}