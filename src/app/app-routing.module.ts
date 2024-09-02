import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
// import { CartComponent } from './cart/cart.component';
const routes: Routes = [
  {
    path:'',
    loadChildren:() => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path:'products',
    loadChildren:() => import('../app/product/product-routing.module').then(m => m.productRoutingModule)
  },
  // {
  //   path:'product/:id',
  //   loadChildren:() => import('../app/product-detail/product-detail-routing.module').then(m => m.productDetailRoutingModule)
  // },
  {
    path:'men',
    component:ProductComponent
  },
  {
    path:'women',
    component:ProductComponent
  },
  {
    path:'beauty',
    component:ProductComponent
  },
  {
    path:'hygiene',
    component:ProductComponent
  },
  {
    path:'mobile',
    component:ProductComponent
  },
  {
    path:'electronics',
    component:ProductComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }