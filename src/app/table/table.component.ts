import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {


  @Input() productsData;

  displayedColumns: string[] = ["Name", "Price", "Address", "Email", "Phone number"];

  constructor() { }

  ngOnInit(): void {
  }

  deleteHandler = (product) => {
    this.productsData = this.productsData.filter((prod) => prod.name !== product.name );
  }

}
