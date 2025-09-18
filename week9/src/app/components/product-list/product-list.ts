import { Component, OnInit } from '@angular/core';
import { ProductData, Product} from '../../services/product-data';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css']
})
export class ProductList implements OnInit{
  products: Product[] = [];
  constructor(private proddata: ProductData, private router:Router){}
  ngOnInit(){
    this.proddata.read().subscribe((data)=>{
      console.log(data);
      this.products = data;
    })
    
  }

  delete(productID?: string){
    if (!productID) return;
    if(confirm("Are you sure you want to delete this item")){
      this.proddata.delete(productID).subscribe((data)=>{
        this.products =data;
      });
    }
  }

}
