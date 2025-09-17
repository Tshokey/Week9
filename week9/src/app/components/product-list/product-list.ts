import { Component, OnInit } from '@angular/core';
import { ProductData, Product} from '../../services/product-data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css']
})
export class ProductList implements OnInit{
  products: Product[] = [];
  constructor(private proddata: ProductData, private router:Router){}
  ngOnInit(){
    this.proddata.read().subscribe((data)=>{
      this.products = data;
    })
    
  }

  delete(id){
    if(confirm("Are you sure you want to delete this item")){
      this.proddata.delete(id).subscribe((data)=>{
        this.products =data;
      });
    }
  }

}
