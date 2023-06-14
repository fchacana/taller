import { SalesService } from './../../services/sales.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { Product } from 'src/app/models/productos';
import { Sale } from 'src/app/models/sale';
import { CartService } from 'src/app/services/cart.service';
import Swal from 'sweetalert2';
import 'jspdf-autotable';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {



  constructor(private cartService: CartService, public authService: AuthService, public saleService: SalesService, private router: Router) { }


  cardNumber: string = '';
  cart: Product[]
  totalAmount: number
  currentUser: string
  sale = new Sale();
  user = this.authService

  ngOnInit(): void {
    this.getCartDetail()
    this.getCurrentUser()
  }

  getCartDetail() {
    this.cart = this.cartService.getCart();
    this.totalAmount = this.cart.reduce((acc, curr) => acc + curr.price, 0);
  }

  getCurrentUser() {
    this.authService.idTokenClaims$?.subscribe(claims => {
      this.currentUser = claims['sub'];
    });
  }

  saveSales() {
    if (this.validateCardNumber()) {
      Swal.fire({
        title: 'Confirm',
        text: "Create Sale?",
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes',
        cancelButtonText: 'No',
        buttonsStyling: true
      }).then((result) => {
        if (result.value) {


          this.sale = { listProducts: this.cart, total: this.totalAmount, user: this.currentUser }
          this.saleService.createSale(this.sale).subscribe(
            res => {
              console.log(res)
            }
          )
          this.cartService.emptyCart();

          this.backToSales()
        }
      })
    } else {
      Swal.fire(
        'Error!',
        'Invalid Credit Card!',
        'error'
      )


    }
  }

  backToSales() {
    this.router.navigate(['/sales'])
  }

  goToProducts() {

    this.router.navigate(['/sales'])
  }

  removeProduct(producto: Product): void {
    
    this.getCartDetail()
    Swal.fire({
      title: 'Confirm',
      text: "Remove product?",
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
      buttonsStyling: true
    }).then((result) => {
      if (result.value) {
        this.cartService.removeProduct(producto);
      }
    })


  }




  validateCardNumber() {
    const regex = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/;
    return regex.test(this.cardNumber);
  }



}
