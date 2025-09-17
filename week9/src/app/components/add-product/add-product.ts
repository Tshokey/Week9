import { Component, OnInit } from '@angular/core';
import { ProductData, Product } from '../../services/product-data';

@Component({
  selector: 'app-add-product',
  imports: [],
  templateUrl: './add-product.html',
  styleUrls: ['./add-product.css'],
})
export class AddProduct implements OnInit {
  productname:string = "";
  productdesc:string = "";
  productprice:number = 0;
  productunits:number = 0;
  productid:number = 0;
  productobjid:string = "";
  newprod:Product;
  newProductMessage= "";
  iderrormsg:string = "This id already exists $ New ID is required";
  iderrormsg2:string="";
  iderrorshow:boolean = false;
  noticeshow:boolean = false;
  constructor(private proddata:ProductData){}

  ngOnInit(){
  }

  get stateName(){
    return this.iderrorshow;
  }
  get noticeName(){
    return this.noticeshow;
  }
  addnewProduct(event){
    event.preventDefault();
    if(this.productid == null){
      this.iderrorshow = !this.iderrorshow;
    }else{""
      this.newprod = new Product("", this.productid, this.productname, this.productdesc, this.productprice, this.productunits);
      this.proddata.add(this.newprod).subscribe((data)=>{
        console.log(data);
        this.noticeshow = true;
        if(data.err == null){
          this.newProductMessage = data.num + " new product (" + this.productname + ") was added";
        }else{
          this.newProductMessage = data.err;
        }
        this.productid=0;
        this.productname="";
        this.productdesc="";
        this.productprice=0;
        this.productunits=0;
      });
    }
  }

}
