import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BuyerProductListComponent } from './buyer-product-list/buyer-product-list.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { RentalPageComponent } from './rental-page/rental-page.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { PostReturnPageComponent } from './post-return-page/post-return-page.component';

const routes : Routes = [
  { path: 'buyer-product-list', component: BuyerProductListComponent },
  { path: 'product-page/:id', component: ProductPageComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent},
  { path: 'rental-page', component: RentalPageComponent},
  { path: 'post-return-page/:id', component: PostReturnPageComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }