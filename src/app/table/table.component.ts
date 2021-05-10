import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  // Input decorator - refference to the state of the parent component
  @Input() productsData;


  // Output decorator - function used for sending data from the child component to the parent component
  @Output() newEvent = new EventEmitter<Object>();


  // table columns 
  displayedColumns: string[] = ["Name", "Price", "Address", "Email", "Phone number"];

  constructor() { }


  ngOnInit(): void {
  }


  // onclick emit
  deleteHandler = (product: Object) => {
    this.newEvent.emit(product);
  }

}
