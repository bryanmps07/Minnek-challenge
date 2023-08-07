import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsFormComponent } from './pages/products-form/products-form.component';
import { ProductsListComponent } from './pages/products-list/products-list.component';
import { AuthGuard } from '../auth/guards/auth.guard';

const routes: Routes = [
   {
    path: '',
    component: ProductsListComponent,
    // canActivate: [AuthGuard],
  },
  {
    path: 'add',
    component: ProductsFormComponent,
    // canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
