import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { FirstPageComponent } from './pages/first-page/first-page.component';
import { MobileMenuComponent } from './pages/mobile-menu/mobile-menu.component';
import { ShopComponent } from './pages/shop/shop.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './сomponents/header/header.component';
import { ButtonComponent } from './сomponents/button/button.component';
import { LeftTextComponent } from './сomponents/left-text/left-text.component';
import { FooterComponent } from './сomponents/footer/footer.component';
import { TitleSectionComponent } from './сomponents/title-section/title-section.component';
import { TextSectionComponent } from './сomponents/text-section/text-section.component';
import { AboutBrandComponent } from './сomponents/about-brand/about-brand.component';
import { AboutCreatorsComponent } from './сomponents/about-creators/about-creators.component';
import { PowderComponent } from './сomponents/powder/powder.component';
import { AdvantagesComponent } from './сomponents/advantages/advantages.component';
import { ContactComponent } from './сomponents/contact/contact.component';
import { MyCarouselComponent } from './сomponents/my-carousel/my-carousel.component';
import { ProductCartComponent } from './сomponents/product-cart/product-cart.component';
import { SmallShopComponent } from './сomponents/small-shop/small-shop.component';
import { ShopCartComponent } from './pages/shop-cart/shop-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FirstPageComponent,
    ShopComponent,
    MobileMenuComponent,
    ButtonComponent,
    LeftTextComponent,
    FooterComponent,
    TitleSectionComponent,
    TextSectionComponent,
    AboutBrandComponent,
    AboutCreatorsComponent,
    PowderComponent,
    AdvantagesComponent,
    ContactComponent,
    AboutPageComponent,
    ContactPageComponent,
    MyCarouselComponent,
    ProductCartComponent,
    ProductPageComponent,
    SmallShopComponent,
    ShopCartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
