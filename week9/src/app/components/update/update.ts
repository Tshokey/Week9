import { Component, OnInit } from '@angular/core';
import { ProductData, Product} from '../../services/product-data';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update',
  imports: [],
  templateUrl: './update.html',
  styleUrls: ['./update.css']
})
export class Update implements OnInit {
  products: Product[] = [];
  constructor(private proddata: ProductData, private router:Router, private route: ActivatedRoute){}

  ngOnInit() {
        const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      // fetch product by ID
      this.proddata.read().subscribe((data) => {
        const found = data.find(p => p._id === id);
        if (found) {
          this.products = { ...found };
        }
      });
    }
    
  }

  updateProduct() {
    this.proddata.update(this.products).subscribe((res) => {
      console.log('Product updated:', res);
      this.router.navigate(['/product']);
    });
  }


}
