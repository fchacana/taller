import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/productos';
import { ProductService } from 'src/app/services/product/product.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-createproduct',
  templateUrl: './createproduct.component.html',
  styleUrls: ['./createproduct.component.css']
})
export class CreateproductComponent implements OnInit {

  product: Product = new Product();
  selectedFile: File;


  constructor(private productService: ProductService, private router: Router) {

  }

  saveProduct() {
    Swal.fire({
      title: 'Confirmar',
      text: "Agendar cita?",
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
      buttonsStyling: true
    })
      .then((result) => {
        if (result.value) {

          this.productService.createProduct(this.product).subscribe(
            res => {
              console.log(res)

            }, error => console.log(error)
          );
          this.productService.getListProducts()
          this.backToProducts()
        }
      })
  }
  backToProducts() {
    this.router.navigate(['/dashboard'])
  }
  onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];
  }


  ngOnInit(): void {


  }

  onSubmit() {
    this.saveProduct();
  }

}
