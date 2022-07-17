import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { HttpProviderService } from 'src/app/services/http-provider.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  @Input() heading: string = '';
  @Input() desc: string = '';
  @Input() type: string = '';
  dataList: Product[] = [];
  categoriesList: string[] = [];
  eachCategoryList: Product[] = [];
  defaultCategoryList: Product[] = [];
  showAll: boolean = false;
  index: number = 0;
  getAllProduct() {
    return this.httpProviderService
      .getAllProducts()
      .subscribe((data: any) => (this.dataList = data));
  }
  getAllCategories() {
    return this.httpProviderService.getCategoriesArr().subscribe((data) => {
      this.categoriesList = data;
    });
  }
  getEachProductCategory(category: string) {
    return this.httpProviderService
      .getEachCategory(category)
      .subscribe((data) => {
        this.eachCategoryList = data;
        this.defaultCategoryList = data;
      });
  }
  constructor(private httpProviderService: HttpProviderService) {}
  changeProductList(isNext: boolean = true) {
    isNext ? this.index++ : this.index--;
    if (this.index === 4 && isNext === true) {
      this.index = 0;
    }
    if (this.index === -1 && isNext === false) {
      this.index = 3;
    }
    this.getEachProductCategory(this.categoriesList[this.index]);
  }
  toggleAllProduct() {
    this.showAll = !this.showAll;
    this.showAll
      ? (this.eachCategoryList = this.dataList)
      : (this.eachCategoryList = this.defaultCategoryList);
  }
  ngOnInit(): void {
    this.getAllProduct();
    this.getAllCategories();
    this.getEachProductCategory(this.type);
  }
}
