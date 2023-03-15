import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { FirstPageComponent } from './pages/first-page/first-page.component';
import { MobileMenuComponent } from './pages/mobile-menu/mobile-menu.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { ShopComponent } from './pages/shop/shop.component';
import { ShopCartComponent } from './pages/shop-cart/shop-cart.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: FirstPageComponent},
  {path: 'shop', component: ShopComponent},
  {path: 'shop/:id', component: ProductPageComponent},
  {path: 'menu', component: MobileMenuComponent},
  {path: 'contact', component: ContactPageComponent},
  {path: 'about', component: AboutPageComponent},
  {path: 'cart', component: ShopCartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
