import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product.component';


const productRoutes: Routes = [
    { 
      path: 'products', 
      component: ProductComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(productRoutes)],
  exports: [RouterModule]
})
export class productRoutingModule { }