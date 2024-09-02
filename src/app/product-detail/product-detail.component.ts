import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../service/data.service';
import { CartserviceService } from '../service/cartservice.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product:any;
  constructor(
    private route:ActivatedRoute,
    private dataservice:DataService,
    private router:Router,
    private cartservice:CartserviceService
  ) { }

  ngOnInit(): void {
    const productId = +this.route.snapshot.paramMap.get('id')!;
    this.dataservice.getProductById(productId).subscribe(product => {
      this.product = product;
      console.log(this.product);
    })
  }
  cart(){
    if(this.product){
      this.cartservice.addTocart(this.product);
      this.router.navigate(['/cart']);
    }
  }
}
