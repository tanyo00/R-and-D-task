import { Component } from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  
  products = [
   
  ];
  
  onSubmit = (name: string, price: number, address: string, email: string, number: string) => {

    let product = {
      name: name,
      price: price,
      address: address,
      email: email,
      number: number
    };

    this.products = [...this.products, product]
    console.log(this.products)
  }


}
