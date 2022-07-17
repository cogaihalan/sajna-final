import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product.model';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {
  @Input() productItem: Product = {
    id: 0,
    title: '',
    price: '',
    category: '',
    description: '',
    image: '',
  };

  constructor() {}

  ngOnInit(): void {}
}
