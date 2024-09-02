import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../service/data.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  catList:any[]=[];
  uniqueProduct:any[]=[];
  productList:any[]=[];
  images:string[]=[
    '/assets/carousel1.webp',
    '/assets/carousel2.webp',
    '/assets/carousel3.webp',
    '/assets/carousel4.webp'
  ]

  constructor(
    private dataservice:DataService,
    private route:Router
  ) { }

  ngOnInit(): void {
    // to show random products from data service
    this.dataservice.getProducts().subscribe(res =>{
      this.catList = res,
      this.showProduct()
    }
    )
  }
  showProduct(){
    const seenCategory = new Set<number>();

      this.uniqueProduct = this.catList.filter(product => {
        if(!seenCategory.has(product.categoryId)){
          seenCategory.add(product.categoryId);
          console.log(seenCategory,"dd");
          return true;
        }
        return false;
      
      })
      console.log(this.uniqueProduct);
    }

    // to see product in detail
    viewProduct(id:number){
      this.route.navigate(['/product',id]);
    }
}
