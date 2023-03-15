import { Injectable } from '@angular/core';
import { Product } from 'src/app/types/product';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsToBuyService {
  private productsList: Product[] = [];
  private productsList$ = new BehaviorSubject<Product[]>(this.productsList);

  constructor() { }

  getProducts(): Observable<Product[]> {
    return this.productsList$.asObservable();
  }

  addToList(products: Product) {
    this.productsList.push(products);
    this.productsList$.next(this.productsList);
  }

  removeFromList(productId: number) {
    this.productsList = this.productsList.filter(p => p.id !== productId);
    this.productsList$.next(this.productsList);
  }
}
