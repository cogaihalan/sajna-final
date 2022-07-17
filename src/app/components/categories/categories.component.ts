import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  @Input() categories: Product[] = [];
  categoriesProduct = [
    {
      title: 'Winter wears',
      subtitle: 'Good personality in cold season',
      list: [
        {
          image: '../../../assets/imgs/product/type-1-1.jpeg',
          name: 'Black leather jacket',
          price: '$ 127.00',
        },
        {
          image: '../../../assets/imgs/product/type-1-2.jpeg',
          name: 'Bumper Jacket',
          price: '$ 99.00',
        },
        {
          image: '../../../assets/imgs/product/type-1-3.jpeg',
          name: 'sleeve woolen shirt',
          price: '$ 112.00',
        },
      ],
    },
    {
      title: 'Accessories',
      subtitle: 'Optional but essential products',
      list: [
        {
          image: '../../../assets/imgs/product/type-2-1.png',
          name: 'tip note boot',
          price: '$ 132.00',
        },
        {
          image: '../../../assets/imgs/product/type-2-2.jpeg',
          name: 'Classy goggles',
          price: '$ 88.00',
        },
        {
          image: '../../../assets/imgs/product/type-2-3.jpeg',
          name: 'white short cap',
          price: '$ 92.00',
        },
      ],
    },
    {
      title: 'fresh clothing',
      subtitle: 'Fresh dress-up for cool style',
      list: [
        {
          image: '../../../assets/imgs/product/type-3-1.jpeg',
          name: 'Bluish denim t-shirt',
          price: '$ 102.00',
        },
        {
          image: '../../../assets/imgs/product/type-3-2.jpeg',
          name: 'short sleeve t-shirt',
          price: '$ 105.00',
        },
        {
          image: '../../../assets/imgs/product/type-3-3.jpeg',
          name: 'black t-shirt',
          price: '$ 123.00',
        },
      ],
    },
    {
      title: 'outer wear',
      subtitle: 'Final touch-up in you fashion',
      list: [
        {
          image: '../../../assets/imgs/product/type-4-1.jpeg',
          name: 'v shape net outer',
          price: '$ 120.00',
        },
        {
          image: '../../../assets/imgs/product/type-4-2.jpeg',
          name: 'sweat shirt',
          price: '$ 115.00',
        },
        {
          image: '../../../assets/imgs/product/type-4-3.jpeg',
          name: 'White half t-shirt',
          price: '$ 112.00',
        },
      ],
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
