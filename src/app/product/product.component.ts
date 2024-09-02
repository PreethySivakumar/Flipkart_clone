import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  products:any[]=[];
  searchproducts:any[]=[];
  categoryId:number=0;
  searchQuery:string='';
  searchString:string ='';
  searchDisplay:boolean = false;
  productDisplay:boolean = false;
  brandProduct:any[]=[];

  constructor(
    private route:ActivatedRoute,
    private dataService:DataService,
    private router:Router
  ) {}

  ngOnInit(): void {

    // getting the category name and showing corresponding products
    this.route.url.subscribe(url =>{
      const category = url[0]?.path;
      console.log(category);
      this.categoryId = this.mapCategoryId(category);
      console.log(this.categoryId,"category");
      if(this.categoryId){
          this.dataService.getItemsByCategory(this.categoryId).subscribe(data=>{
          this.products = data;
          this.productDisplay = true;
          if(this.searchproducts.length == 0){
            this.searchDisplay = false;
          }else{
            this.searchDisplay = true;
          }
          console.log("if...",this.products);
        });
      }else{
        console.log("Invalid category Id:");
        this.products = [];
      }
    });

    // search
    this.route.queryParams.subscribe(params => {
      this.searchQuery = params['query'] || '';
      this.performSearch(this.searchQuery);
    })
  }
 
  private performSearch(query:string){
    if(query.trim()){
      this.dataService.searchProducts(query).subscribe(res=>{
        this.searchproducts = res;
        console.log("if in prod");
        this.searchDisplay = res.length > 0;
      })
    }else{
      this.searchproducts = [];
      console.log("else in prod");
      this.searchDisplay = false;
    }
  }


    mapCategoryId(category:string):number{
      switch(category){
        case 'mobile': return 1;
        case 'men' : return 2;
        case 'women' : return 3;
        case 'beauty' : return 4;
        case 'electronics' : return 5;
        case 'hygiene' : return 6;
        default:return 0;
      }
    }

    getuniqueBrand(){
      const catBrand = this.products.map(item => item.brand);
      return Array.from(new Set(catBrand));
    }
    onBrandChange(brand:string,event:Event){
      const isChecked = (event.target as HTMLInputElement).checked;
      if(isChecked){
        console.log(brand);
        this.brandProduct.push(brand)
      }
      console.log(this.brandProduct);
    }

    viewProduct(productId:number):void{
      this.router.navigate(['/product',productId]);
    }
}
