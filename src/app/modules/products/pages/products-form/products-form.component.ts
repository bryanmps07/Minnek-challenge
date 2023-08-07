import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../../products.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.css']
})
export class ProductsFormComponent implements OnInit {
  public productForm: FormGroup;
  public busy = false;

  constructor(
    private fb: FormBuilder,
    private productsService: ProductsService,
    private router: Router 
  ) {
    this.productForm = this.fb.group({
      name: [null, Validators.required],
      price: [null, Validators.required],
      description: [null, Validators.required],
      image: [null, Validators.required]
    });
  }

  ngOnInit(): void {
    this.productForm = this.fb.group({
      name: [null, Validators.required],
      price: [null, Validators.required],
      description: [null, Validators.required],
      image: [null, Validators.required]
    });
  }

  onSubmit(): void {
    this.busy = true;
    if (this.productForm.valid) {
      this.productsService.createProduct(this.productForm.value).pipe().subscribe(
        ({ name, price, description, image }) => {
          
          this.router.navigate(['products']).then();
          this.busy = false;
        },
        (error: HttpErrorResponse) => {
          console.log(error);
          this.busy = false;
        }
      );
    }
  }
}
