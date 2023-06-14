import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import jsPDF from 'jspdf';
import { Sale } from 'src/app/models/sale';
import { SalesService } from 'src/app/services/sales.service';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-saledetails',
  templateUrl: './saledetails.component.html',
  styleUrls: ['./saledetails.component.css']
})
export class SaledetailsComponent implements OnInit{


  
  id: number;
  sale: Sale;

  constructor(private route: ActivatedRoute, private salesService: SalesService) {}

  ngOnInit(): void {
     this.id = this.route.snapshot.params['id']
    this.sale = new Sale();
    this.salesService.getSale(this.id).subscribe(
      res => {
        this.sale = res
      }
    )
  }

  

  public openPDF(): void {
    let DATA: any = document.getElementById('htmlData');
    html2canvas(DATA).then((canvas) => {
      let fileWidth = 208;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      PDF.save(`sale-${this.sale.id}-${this.sale.user}.pdf`);
    });
  }
  


  
}
