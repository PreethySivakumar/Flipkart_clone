import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from './product-detail.component';
import { productDetailRoutingModule } from './product-detail-routing.module';


@NgModule({
  declarations: [
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    productDetailRoutingModule
  ],
  exports:[
    ProductDetailComponent
  ]
})
export class ProductDetailModule { }
