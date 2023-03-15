import { Component, HostListener, Renderer2, ElementRef  } from '@angular/core';
import { goodsFromServer } from 'src/api/goods';
import { Product } from 'src/app/types/product';

@Component({
  selector: 'app-small-shop',
  templateUrl: './small-shop.component.html',
  styleUrls: ['./small-shop.component.scss']
})
export class SmallShopComponent {
  sortValue: string = 'face';
  visibleList: Product[] = [];
  width: number = 0;
  step: number = 0;

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {
    this.visibleList = goodsFromServer.filter(product => product.category === this.sortValue)
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.width = window.innerWidth;
    console.log(this.width);
  }

  changeSortValue(value: string) {
    this.sortValue = value;
    this.visibleList = goodsFromServer.filter(product => product.category === this.sortValue);
    this.step = 0;
  }

  showNext(number: number) {
    const gap = 25;
    const itemWidth = 320;
    let value = 0;
    const max = -((this.visibleList.length) * itemWidth) + ((this.visibleList.length + 1) * gap);
    const min = 0;

    if (this.width < 760) {
      value = itemWidth + gap
    }

    if (this.width >= 760 && this.width < 1280) {
      value = (itemWidth + gap) * 2 
    }

    if (this.width > 1280) {
      value = (itemWidth + gap) * 3
    }

    if (number > 0) {
      if (this.step === max) {
        this.step = min;

        return;
      }

      if (this.step - value < max) {
        this.step = max;
        return;
      }

      this.step -= value;
    } else {
      if (this.step === min) {
        this.step = max;
        return;
      }

      if (this.step + value > min) {
        this.step = min;

        return;
      }


      this.step += value;
    }
  }

}
