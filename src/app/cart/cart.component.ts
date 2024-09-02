import { Component, OnInit } from '@angular/core';
import { CartserviceService } from '../service/cartservice.service';
import { DataService } from '../service/data.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartItems:any[] = [];
  cartTotal:number = 0;
  offprice:number=0;
  price:number=0;
  random:[]=[];

  constructor(
    private cartservice:CartserviceService,
    private dataservice:DataService
  ) { }

  ngOnInit(): void {

      this.cartservice.getCartItems().subscribe(items =>{
      this.cartItems = items;
      console.log("cart items",this.cartItems);
    });

    this.cartservice.getCartTotal().subscribe(total => {
      this.cartTotal = total;
      console.log(this.cartTotal,"total");
    });

    this.cartservice.getOffTotal().subscribe(total => {
      this.offprice = total;
      console.log(this.offprice);
    })
    this.calculatePrice();
  }
  calculatePrice(){
    this.price = this.cartItems.reduce((sum,acc)=>{
      const discount = acc.offerprice*acc.quantity;
      console.log(discount);
      return sum+(this.cartTotal - discount)},0);
    console.log(this.price);
  }
  increaseQuantity(productId:number){
    this.cartservice.increaseQuantity(productId); 
    this.calculatePrice();
  }

  decreaseQuantity(productId:number){
    this.cartservice.decreaseQuantity(productId);
    this.calculatePrice();
  }

  removeFromCart(productId:number){
    this.cartservice.removeFromCart(productId);
  }

}
