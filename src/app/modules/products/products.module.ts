import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';

import { ProductsRoutingModule } from './products-routing.module';
import { AuthGuard } from '../auth/guards/auth.guard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsFormComponent } from './pages/products-form/products-form.component';
import { ProductsListComponent } from './pages/products-list/products-list.component';


@NgModule({
  declarations: [
    ProductsFormComponent,
    ProductsListComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    CarouselModule,
    ReactiveFormsModule,
    
  ],
  providers: [AuthGuard]
})
export class ProductsModule { }
