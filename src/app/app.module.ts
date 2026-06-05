import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductsComponent } from './feature/products/products.component';
import { ProductPageComponent } from './features/pages/product-page/product-page.component';
import { ProductFormComponent } from './features/pages/components/product-form/product-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductPageComponent,
    ProductFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
