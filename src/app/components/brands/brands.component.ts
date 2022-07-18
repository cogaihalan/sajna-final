import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss'],
})
export class BrandsComponent implements OnInit {
  listBrand = [
    '../../../assets/imgs/brands/sponsor1.png',
    '../../../assets/imgs/brands/sponsor2.png',
    '../../../assets/imgs/brands/sponsor3.png',
    '../../../assets/imgs/brands/sponsor4.png',
    '../../../assets/imgs/brands/sponsor5.png',
    '../../../assets/imgs/brands/sponsor6.png',
    '../../../assets/imgs/brands/sponsor7.png',
    '../../../assets/imgs/brands/sponsor8.png',
    '../../../assets/imgs/brands/sponsor9.png',
    '../../../assets/imgs/brands/sponsor10.png',
    '../../../assets/imgs/brands/sponsor11.png',
  ];
  constructor() {}

  ngOnInit(): void {}
}
