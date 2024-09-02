import { Component, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { DataService } from '../../../service/data.service';
import { LoginComponent } from '../login/login.component';
import { CartserviceService } from '../../../service/cartservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  searchString:string='';
  showResults: boolean = false;
  searchResults:any[]=[];
  carttotal:any[]=[];
  loggedIn:boolean = false;
  username:string='';
  isHomePage:boolean = true;
  logout:boolean = false;
  navbarcolor:string = 'white';

  @ViewChild('loginForm') loginForm!:LoginComponent

  constructor(
    private router:Router,
    private dataservice:DataService,
    private cartservice:CartserviceService
  ) { }

  ngOnInit(): void {
    // subscribing to method from cart service for no.of.products
    this.cartservice.getCartItems().subscribe(res => 
      this.carttotal = res
    )

    this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd){
        this.updateNavcolor(event.urlAfterRedirects);
      }
    })
  }



  onSearch(): void {
    if (this.searchString.trim()) {
      this.dataservice.searchProducts(this.searchString).subscribe(res =>{
            this.router.navigate(['/products'],{queryParams:{query:this.searchString}});
            console.log("if in header")
          });
        }else {
      this.searchResults = [];
      this.showResults = false; 
    }
  }

  // show login form
  showLoginForm(){
    this.loginForm.show();
    console.log("login");
  }

  // show product from cart
  toCart(){
    console.log("header cart");
    this.router.navigate(['/cart']);
  }

  // successful login
  onLoginSuccess(username:string){
    username.toUpperCase();
    this.username = username;
    this.loggedIn = true;
    this.logout = true;
  }

  logoutForm(){
    this.username = '';
    this.logout = false;
    this.loggedIn = false;
  }

  updateNavcolor(url:string){
    if(url === '/home' || url === '/'){
      this.navbarcolor = 'white';
    }else{
      this.navbarcolor = 'blue'
    }
  }
}
