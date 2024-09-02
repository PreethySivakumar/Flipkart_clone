import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from '../product/product.component';
import { CartComponent } from '../cart/cart.component';

const homeRoutes: Routes = [
 {
    path:'',
    component:HomeComponent
 },
 {
  path:'home',
  component:HomeComponent
 },
 {
  path:'products',
  component:ProductComponent
 },
 {
  path:'cart',
  component:CartComponent
 }
];

@NgModule({
  imports: [RouterModule.forChild(homeRoutes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }