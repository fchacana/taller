import { Sale } from 'src/app/models/sale';
import { SalesService } from './../../services/sales.service';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {

  sales: Sale[]

  constructor(private salesService: SalesService, private router: Router) { }
  ngOnInit(): void {
    this.getProducts()
  }


  private getProducts() {
    this.salesService.getListSales().subscribe(
      res => {
        this.sales = res
      }
    )
  }

  viewDetails(id: number) {
    // console.log(id)
    this.router.navigate(['sales-details', id])
  }

  goToProducts()
  {
    this.router.navigate(['/dashboard'])
  }
}
