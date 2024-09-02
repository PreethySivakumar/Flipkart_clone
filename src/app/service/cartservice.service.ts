import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { Product } from '../product.model';

interface cartItem extends Product{
  quantity:number;
}

@Injectable({
  providedIn: 'root'
})
export class CartserviceService {

  private cartItems = new BehaviorSubject<cartItem[]>([]);
  cartItem$ = this.cartItems.asObservable();

  constructor() { }

  addTocart(product:Product){
    const currentItems = this.cartItems.value;
    console.log("add to cart",currentItems);
    // this.cartItems.next([...currentItems,product])
    const existingItem = currentItems.find(item => item.productId === product.productId);

    if(existingItem){
      existingItem.quantity = (existingItem.quantity || 0) +1;
    }else{
      currentItems.push({...product,quantity:1})
    }

    this.cartItems.next([...currentItems]);
  }

  increaseQuantity(productId:number){
    const currentItems = this.cartItems.value;
    const item = currentItems.find(p => p.productId === productId);

    if(item){
      item.quantity = (item.quantity || 0)+1;
      this.cartItems.next([...currentItems]);
    }
  }

  decreaseQuantity(productId:number){
    const currentItems = this.cartItems.value;
    const item = currentItems.find(p => p.productId === productId);

    if(item){
      item.quantity = (item.quantity || 0)-1;
      if(item.quantity <= 0){
        this.removeFromCart(productId);
      }else{
      this.cartItems.next([...currentItems]);
    }
    }
  }

  removeFromCart(productId:number){
    const currentItems = this.cartItems.value;
    const updatedItems = currentItems.filter(item => item.productId != productId);
    this.cartItems.next(updatedItems);
  }

  getCartItems(){
    return this.cartItems.asObservable();
  }

  getCartTotal(){
    return this.cartItem$.pipe(
      map(items => items.reduce((total:number,item:any) => total+(item.quantity*item.price || 0),0))
    );
  }
  getOffTotal(){
    return this.cartItem$.pipe(
      map(items => items.reduce((total:number,item:any) => total+(item.quantity*item.offerprice || 0),0))
    );
  }
}
