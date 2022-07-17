import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss'],
})
export class BrandsComponent implements OnInit {
  listBrand = [
    '../../../assets/imgs/sponsor1.png',
    '../../../assets/imgs/sponsor2.png',
    '../../../assets/imgs/sponsor3.png',
    '../../../assets/imgs/sponsor4.png',
    '../../../assets/imgs/sponsor5.png',
    '../../../assets/imgs/sponsor6.png',
    '../../../assets/imgs/sponsor7.png',
    '../../../assets/imgs/sponsor8.png',
    '../../../assets/imgs/sponsor9.png',
    '../../../assets/imgs/sponsor10.png',
    '../../../assets/imgs/sponsor11.png',
  ];
  constructor() {}

  ngOnInit(): void {}
}
