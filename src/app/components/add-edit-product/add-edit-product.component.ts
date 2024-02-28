import { Product } from './../../interfaces/product';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrl: './add-edit-product.component.css'
})
export class AddEditProductComponent implements OnInit{
    form: FormGroup;

    constructor(private fb: FormBuilder) {
      this.form = this.fb.group({
        name: ['', [Validators.required, Validators.maxLength(10)]],
        description: ['', Validators.required],
        price: [null, Validators.required],
        stock: [null, Validators.required],
      })
    }

    ngOnInit(): void {

    }

    addProduct(){
      console.log(this.form.value.name);
      console.log(this.form.get('name')?.value);

      const Product: Product = {
        name: this.form.value.name,
        description: this.form.value.description,
        price: this.form.value.price,
        stock: this.form.value.stock,
      }

      console.log("produto adicionado")
      console.log(Product);
    }
}

