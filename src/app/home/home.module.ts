import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { CategoryComponent } from './components/category/category.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeRoutingModule } from './home-routing.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations:[
    HomeComponent,
    LoginComponent,
    CategoryComponent,
    HeaderComponent,
   
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule
  ],
  exports:[
    HomeComponent,
    LoginComponent,
    CategoryComponent,
    HeaderComponent,
  ]
})
export class HomeModule { }
