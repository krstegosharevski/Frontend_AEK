import { Component, OnInit } from '@angular/core';
import { OperatorsService } from '../_services/operators.service';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.css']
})
export class OperatorsComponent implements OnInit {
  showForm = false;
  showOperator = false;

  private allOperators: { code: string, name: string }[] = [];
  operators: { code: string, name: string }[] = [];
  currentPage = 1;
  itemsPerPage = 10;
  totalItems = 0;

  constructor(private operatorService: OperatorsService) { }

  ngOnInit(): void {
    this.operatorService.getOperators().subscribe(data => {
      this.allOperators = data;
      this.totalItems = this.allOperators.length;
      this.updateOperatorsForCurrentPage();
    });
  }

  pageChanged(event: PageChangedEvent): void {
    this.currentPage = event.page;
    this.updateOperatorsForCurrentPage();
  }

  private updateOperatorsForCurrentPage(): void {
    const startItem = (this.currentPage - 1) * this.itemsPerPage;
    const endItem = this.currentPage * this.itemsPerPage;
    this.operators = this.allOperators.slice(startItem, endItem);
  }

    // operators: {code: string, name: string}[] = [];
  // currentPage = 1;
  // itemsPerPage = 10;
  // totalItems = this.operators.length;

  // constructor(private operatorService: OperatorsService) { }

  // ngOnInit(): void {
  //   this.operatorService.getOperators().subscribe(data => {
  //     this.operators = data;
  //     this.totalItems = this.operators.length;
  //     //this.operators = this.operators.slice(0, this.itemsPerPage);
  //     this.updateOperatorsForCurrentPage();
      
  //     console.log(this.totalItems);
  //   });
  // }

  // pageChanged(event: PageChangedEvent): void {
  //   const startItem = (event.page - 1) * this.itemsPerPage;
  //   const endItem = event.page * this.itemsPerPage;
  //   this.operators = this.operators.slice(startItem, endItem);
  // }

  // pageChanged(event: PageChangedEvent): void {
  //   this.currentPage = event.page;
  //   this.updateOperatorsForCurrentPage();
  // }

  // private updateOperatorsForCurrentPage(): void {
  //   const startItem = (this.currentPage - 1) * this.itemsPerPage;
  //   const endItem = this.currentPage * this.itemsPerPage;
  //   this.operators = this.operators.slice(startItem, endItem);
  // }

}
