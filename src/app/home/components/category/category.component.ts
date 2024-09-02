import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { DataService } from 'src/app/service/data.service';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  catList:any[]=[];
  uniqueProduct:any[]=[];
  showImage = false;
  isHomePage:boolean = false; 
  constructor(
    private dataservice:DataService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe(()=>{
      this.isHomePage = this.router.url === '/'
    })


    this.dataservice.getProducts().subscribe(res =>{
      this.catList = res,
      this.showProduct();
    })

    this.router.events.subscribe((event) => {
      if(event instanceof NavigationEnd){
        this.showImage = event.url === '/' || event.url === '/home' || event.url === '/cart';
      }
    });
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


}
