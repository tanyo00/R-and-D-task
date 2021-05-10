import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // create form group which groups form values
  // and validate them with different validators
  productForm = new FormGroup({
    name: new FormControl("", [Validators.required]),
    price: new FormControl("", [Validators.required]),
    address: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required, Validators.email]),
    number: new FormControl("", [Validators.required])
  });

  // products array (stores all products objects)
  products = [
  ];
  

  removeProduct = (newItem) => {
    this.products = this.products.filter((product) => product.name !== newItem.name);
  }


  onSubmit = () => {
    let product = {
      name: this.productForm.get('name').value,
      price: this.productForm.get('price').value,
      address: this.productForm.get('address').value,
      email : this.productForm.get('email').value,
      number: this.productForm.get('number').value,
    };

    // if all validators are valid add our product to the products array

    if(
      this.productForm.valid
    ) {
      this.products = [...this.products, product];
      this.productForm.reset();
    }   
  }


}
