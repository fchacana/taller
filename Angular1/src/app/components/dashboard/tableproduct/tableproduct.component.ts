import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/productos';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product/product.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-tableproduct',
  templateUrl: './tableproduct.component.html',
  styleUrls: ['./tableproduct.component.css']
})

export class TableproductComponent implements OnInit {

  products: Product[];
  product: Product;
  
  optionSort: { property: string | null, order : string } = { property : null, order : 'asc' };

  constructor(private productService: ProductService, private router: Router, private cartService: CartService) { }

  ngOnInit(): void {
    this.getProducts()
  }


  updateProduct(id: number) {
    this.router.navigate(['update-product', id])
  }

  private getProducts() {
    this.productService.getListProducts().subscribe(
      res => {
        this.products = res
      }
    )
  }


  deleteProduct(id: number) {
    Swal.fire({
      title: 'Delete Product?',
      text: "This action can not be undone",
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
      buttonsStyling: true
    }).then((result) => {
      if (result.value) {

        this.productService.deleteProduct(id).subscribe(
          res => {
            this.getProducts()
          })
      }
    })
  }

  viewDetails(id: number) {
    // console.log(id)
    this.router.navigate(['product-details', id])
  }

  addToCart(p: Product): void {
    // console.log(p)
    this.cartService.addProduct(p);
    console.log(this.cartService.getCart())
  }

  orderByCategory(property: string): void {
    const order = this.optionSort.order;
    this.optionSort = {
      property,
      order: order === 'asc' ? 'desc' : 'asc'
    }
  }


  goToCreateProducts()
  {
    this.router.navigate(['/createproduct'])
  }

}
