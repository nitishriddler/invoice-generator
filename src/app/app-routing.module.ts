import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerComponent } from './customer/customer.component';
import { HomeComponent } from './home/home.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderComponent } from './order/order.component';
import { PreviewComponent } from './preview/preview.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { SellerListComponent } from './seller-list/seller-list.component';
import { SellerComponent } from './seller/seller.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'product', component: ProductComponent },
  { path: 'customer', component: CustomerComponent },
  { path: 'seller', component: SellerComponent },
  { path: 'product-list', component: ProductListComponent },
  { path: 'customer-list', component: CustomerListComponent },
  { path: 'seller-list', component: SellerListComponent },
  { path: 'order', component: OrderComponent},
  { path: 'order-list',component: OrderListComponent},
  { path: 'preview',component: PreviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
