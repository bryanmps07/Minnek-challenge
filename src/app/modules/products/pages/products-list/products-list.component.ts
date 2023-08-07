import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product.interface';
import { ProductsService } from '../../products.service';


@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  products: Product[] | undefined;

  responsiveOptions: any[] | undefined;

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
      this.productsService.getProducts().pipe().subscribe(
        ({payload}) => {
          this.products?.push(payload);
        }, (error: any) => {
          this.products = [];
        }
        );

      this.responsiveOptions = [
          {
              breakpoint: '1199px',
              numVisible: 1,
              numScroll: 1
          },
          {
              breakpoint: '991px',
              numVisible: 2,
              numScroll: 1
          },
          {
              breakpoint: '767px',
              numVisible: 1,
              numScroll: 1
          }
      ];
  }
}
