import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductData, Product } from '../../services/product-data';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './update.html',
  styleUrls: ['./update.css']
})
export class Update implements OnInit {
  product: Product = { id: 0, name: '', description: '', price: 0, units: 0 };

  constructor(private proddata: ProductData, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.proddata.read().subscribe(products => {
        const found = products.find(p => p._id === id);
        if (found) this.product = { ...found };
      });
    }
  }

  updateProduct() {
    this.proddata.update(this.product).subscribe(() => this.router.navigate(['/product']));
  }
}
