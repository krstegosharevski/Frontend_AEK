import { Component, OnInit } from '@angular/core';
import { PortingRequest, PortingRequestService } from '../_services/porting-request.service';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';

// @Component({
//   selector: 'app-porting-requests',
//   templateUrl: './porting-requests.component.html',
//   styleUrls: ['./porting-requests.component.css']
// })
// export class PortingRequestsComponent implements OnInit {

//   portingRequests: PortingRequest[] = [];
//   portingRequest: PortingRequest[] = [];
//   status: string = '';
//   selectedStatus: string = "";  // Дефинирај го почетниот статус
//   currentPage = 1;
//   itemsPerPage = 6;
//   totalItems = 0;

//   constructor(private portingService: PortingRequestService) { }

//   ngOnInit(): void {
    
//     this.loadPortingRequests();  // Почетно учитавање на податоците
    
//   }

//   loadPortingRequests(): void {
//     console.log(this.selectedStatus)
    
//     this.portingRequests = [];
//     this.portingService.getPortingRequests(this.selectedStatus).subscribe(
//       (requests: PortingRequest[]) => {
//         this.portingRequests = requests;
//         this.totalItems = this.portingRequests.length;
//         this.updateOperatorsForCurrentPage();
//         // Можете да ја измените по потреба
       
//       },
//       error => {
//         console.error('Error loading porting requests:', error);
//         this.status = 'Error loading data';
//       }
//     );
//   }

//   pageChanged(event: PageChangedEvent): void {
//     this.currentPage = event.page;
//     this.updateOperatorsForCurrentPage();
//   }

//   private updateOperatorsForCurrentPage(): void {
//     const startItem = (this.currentPage - 1) * this.itemsPerPage;
//     const endItem = this.currentPage * this.itemsPerPage;
//     this.portingRequest = this.portingRequests.slice(startItem, endItem);
//   }
// }

@Component({
  selector: 'app-porting-requests',
  templateUrl: './porting-requests.component.html',
  styleUrls: ['./porting-requests.component.css']
})
export class PortingRequestsComponent implements OnInit {

  portingRequests: PortingRequest[] = [];
  portingRequest: PortingRequest[] = [];
  status: string = '';
  selectedStatus: string = "";  // Дефинирај го почетниот статус
  currentPage = 1;
  itemsPerPage = 6;
  totalItems = 0;

  constructor(private portingService: PortingRequestService) { }

  ngOnInit(): void {
    this.loadPortingRequests();  // Почетно учитавање на податоците
  }

  loadPortingRequests(): void {
    this.resetData(); // Ресетирај ги податоците пред да направиш нов повик
    this.portingService.getPortingRequests(this.selectedStatus).subscribe(
      (requests: PortingRequest[]) => {
        this.portingRequests = requests;
        this.totalItems = this.portingRequests.length;
        this.updateOperatorsForCurrentPage();
      },
      error => {
        console.error('Error loading porting requests:', error);
        this.status = 'Error loading data';
      }
    );
  }

  pageChanged(event: PageChangedEvent): void {
    this.currentPage = event.page;
    this.updateOperatorsForCurrentPage();
  }

  private updateOperatorsForCurrentPage(): void {
    const startItem = (this.currentPage - 1) * this.itemsPerPage;
    const endItem = this.currentPage * this.itemsPerPage;
    this.portingRequest = this.portingRequests.slice(startItem, endItem);
  }

  // Додади метод за ресетирање на податоците
  private resetData(): void {
    this.portingRequests = [];
    this.portingRequest = [];
    this.totalItems = 0;
    this.currentPage = 1;
  }
}

