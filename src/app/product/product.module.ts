import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { productRoutingModule } from './product-routing.module';

@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    CommonModule,
    productRoutingModule
  ],
  exports:[
    ProductComponent
  ]
})
export class ProductModule { }
