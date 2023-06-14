import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/productos';
import { ProductService } from 'src/app/services/product/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})

export class UpdateproductComponent implements OnInit {

  id: number;
  product: Product = new Product();
  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.productService.getProduct(this.id).subscribe(dato => {
      this.product = dato;
    }, error => console.log(error));
  }

  onSubmit() {

    Swal.fire({
      title: 'Update Product',
      text: "are you sure?",
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
      buttonsStyling: true
    }).then((result) => {
      if (result.value) {

        this.productService.updateProduct(this.id, this.product).subscribe(dato => {
          this.backToProducts();
        }, error => console.log(error));
      }
    })

  }

  backToProducts() {
    this.router.navigate(['/dashboard'])
  }

}
