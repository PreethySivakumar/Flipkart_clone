import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';

// import { ListComponent } from './list/list.component';
// import { ProductComponent } from './product/product.component';
// import { ProductDetailComponent } from './product-detail/product-detail.component';
// cimport { CartComponent } from './cart/cart.component';

import { DataService } from './service/data.service';
import { CartserviceService } from '../app/service/cartservice.service';
import { HomeModule } from './home/home.module';
import { CartModule } from './cart/cart.module';
import { ProductModule } from './product/product.module';
// import { productDetailRoutingModule } from './product-detail/product-detail-routing.module';
import { ProductDetailModule } from './product-detail/product-detail.module';

@NgModule({
  declarations: [
    AppComponent,
    // HeaderComponent,
    FooterComponent,
    // CategoryComponent,
   
    // HomeComponent,
    // ListComponent,
    // ProductComponent,
    // ProductDetailComponent,
    // CartComponent,
    // LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HomeModule,
    CartModule,
    ProductModule,
    ProductDetailModule
  ],
  providers: [
    DataService,
    CartserviceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
