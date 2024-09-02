import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailComponent } from './product-detail.component';

const productDetailRoutes: Routes = [
    {
        path:'product/:id',
        component:ProductDetailComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(productDetailRoutes)],
  exports: [RouterModule]
})
export class productDetailRoutingModule { }