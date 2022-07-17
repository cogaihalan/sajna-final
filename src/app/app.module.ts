import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BillboardComponent } from './components/billboard/billboard.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductItemComponent } from './components/product-list/product-item/product-item.component';
import { FooterComponent } from './components/footer/footer.component';
import { FeaturesComponent } from './components/features/features.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CategoryComponent } from './components/categories/category/category.component';
import { BrandsComponent } from './components/brands/brands.component';
import { HttpProviderService } from './services/http-provider.service';
import { StoryComponent } from './components/story/story.component';
import { BannerComponent } from './components/banner/banner.component';
import { NewsComponent } from './components/news/news.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BillboardComponent,
    ProductListComponent,
    ProductItemComponent,
    FooterComponent,
    FeaturesComponent,
    NewsletterComponent,
    CategoriesComponent,
    CategoryComponent,
    BrandsComponent,
    StoryComponent,
    BannerComponent,
    NewsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [HttpProviderService],
  bootstrap: [AppComponent],
})
export class AppModule {}
