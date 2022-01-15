import { NgModule } from '@angular/core';

import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductEditComponent } from './product-edit/product-edit.component';

import { SharedModule } from '../shared/shared.module';
import {RouterModule} from '@angular/router';
import {ProductResolve} from './product-resolve.service';

@NgModule({
  imports: [
    SharedModule,
      RouterModule.forChild([
        {path: 'products', component: ProductListComponent},
        {path: 'products/:id', component: ProductDetailComponent, resolve: {resolvedData: ProductResolve}},
        {path: 'products/:id/edit', component: ProductEditComponent, resolve: {resolvedData: ProductResolve}}
      ])
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ProductEditComponent
  ],
  providers: [ ProductResolve ]
})
export class ProductModule { }
