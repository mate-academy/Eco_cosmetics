import { Component } from '@angular/core';

type Image = {
  imageSRC: string,
  imageAlt: string,
};

@Component({
  selector: 'app-my-carousel',
  templateUrl: './my-carousel.component.html',
  styleUrls: ['./my-carousel.component.scss']
})
export class MyCarouselComponent {
  selectedIndex: number = 0;

  images: Image[] = [
    {
      imageSRC: './assets/images/header_img.jpg',
      imageAlt: 'first image',
    },
    {
      imageSRC: './assets/images/header_1.jpg',
      imageAlt: 'second image',
    },
    {
      imageSRC: './assets/images/header_2.jpg',
      imageAlt: 'third image',
    },
  ];

  next(): void {
    if (this.selectedIndex >= this.images.length - 1) {
      this.selectedIndex = 0;
      return;
    }

    this.selectedIndex++;
  }

  prev() {
    if (this.selectedIndex <= 0) {
      this.selectedIndex = this.images.length - 1;
      return;
    }

    this.selectedIndex--;
  }
}
