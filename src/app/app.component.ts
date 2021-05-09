import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  productForm = new FormGroup({
    name: new FormControl("", [Validators.required]),
    price: new FormControl("", [Validators.required]),
    address: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required, Validators.email]),
    number: new FormControl("", [Validators.required])
  });

  
  products = [
   
  ];
  
  onSubmit = () => {
    let user = {
      name: this.productForm.get('name').value,
      price: this.productForm.get('price').value,
      address: this.productForm.get('address').value,
      email : this.productForm.get('email').value,
      number: this.productForm.get('number').value,
    };

    if(
      this.productForm.valid
    ) {
      this.products = [...this.products, user];
      this.productForm.reset();
    }   
  }


}
