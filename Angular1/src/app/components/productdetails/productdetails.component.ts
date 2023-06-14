import { ProductService } from 'src/app/services/product/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/productos';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {


  id: number;
  product: Product;

  constructor(private route: ActivatedRoute, private productService: ProductService, private r: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.product = new Product();
    this.productService.getProduct(this.id).subscribe(
      res => {
        this.product = res
      }
    )
  }

  backToProducts() {
    this.r.navigate(['dashboard'])
  }


}
