import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';
import { ProductData, Product } from '../../services/product-data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  standalone: true,              
  imports: [CommonModule, FormsModule], 
  templateUrl: './add-product.html',
  styleUrls: ['./add-product.css'],
})
export class AddProduct {
  productid = 0;
  productname = '';
  productdesc = '';
  productprice = 0;
  productunits = 0;

  newprod!: Product;  
  newProductMessage = '';
  iderrorshow = false;
  noticeshow = false;

  constructor(private proddata: ProductData, private router: Router) {}

  get noticeName() {
    return this.noticeshow;
  }

  addnewProduct(event: any) {
    event.preventDefault();

    if (!this.productid) {
      this.iderrorshow = true;
      return;
    }else{
      this.iderrorshow = false;
    }

    this.newprod = {
      id: this.productid,
      name: this.productname,
      description: this.productdesc,
      price: this.productprice,
      units: this.productunits,
    };

    this.proddata.add(this.newprod).subscribe({ next: (data: any) => {
      this.noticeshow = true;
      if (!data.err) {
        this.newProductMessage =
          ' New product (' + this.productname + ') was added';

        this.productid = 0;
        this.productname = '';
        this.productdesc = '';
        this.productprice = 0;
        this.productunits = 0;

      } else {
        this.newProductMessage = data.err;
      }
    },
  });
}
}
