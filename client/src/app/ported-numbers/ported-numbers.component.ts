


import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddPortedService } from '../_services/add-ported.service';
import { PortingResponse } from '../_models/porting_response';
import { PortingRequestsComponent } from '../porting-requests/porting-requests.component';

// @Component({
//   selector: 'app-ported-numbers',
//   templateUrl: './ported-numbers.component.html',
//   styleUrls: ['./ported-numbers.component.css']
// })
// export class PortedNumbersComponent implements OnInit {
//   portedForm: FormGroup;
//   status: string | undefined;
//   data: string | undefined;

//   @ViewChild(PortingRequestsComponent) portingRequestsComponent!: PortingRequestsComponent;

//   constructor(private fb: FormBuilder, private portingService: AddPortedService) {
//     this.portedForm = this.fb.group({
//       ID_Nsn: ['', [Validators.required, this.idNsnValidator]],
//       donor: ['', Validators.required],
//       recipient: ['', Validators.required],
//       routingCode: ['', Validators.required],
//       date: ['', Validators.required],
//       name: ['', Validators.required],
//       edb: ['', Validators.required],
//       comment: ['', Validators.required]
//     });
//   }

//   ngOnInit(): void {}

//   idNsnValidator(control: AbstractControl): { [key: string]: boolean } | null {
//     const value = control.value as number;
//     if (!value) return null;

//     const nsnString = value.toString();
//     const length = nsnString.length;
//     const nDC = parseInt(nsnString.slice(0, 1), 10);
//     const sn = parseInt(nsnString.slice(1), 10);

//     if (length === 8) {
//       const validNDCs = [2, 3, 4, 7];
//       if (validNDCs.includes(nDC) && !sn.toString().startsWith('0') && !sn.toString().startsWith('1')) {
//         return null;
//       }
//     }

//     if (length === 6) {
//       const validNDCs = [2, 3, 4, 7];
//       if (validNDCs.includes(nDC) && sn.toString().startsWith('15')) {
//         return null;
//       }
//     }

//     return { invalidIdNsn: true };
//   }

//   onSubmit() {
//     if (this.portedForm.valid) {
//       const { ID_Nsn, donor, recipient, routingCode, date, name, edb, comment } = this.portedForm.value;
//       this.portingService.addPortingRequest(ID_Nsn, donor, recipient, routingCode, date, name, edb, comment).subscribe(
//         (response: PortingResponse) => {
//           if (response.status === 'OK') {
//             this.status = 'Successful';
//             this.portedForm.reset(); // Ресетирање на формата
//             this.portingRequestsComponent.loadPortingRequests(); // Освежување на табелата
//           } else {
//             this.status = 'Error';
//           }
//           this.data = response.data;
//         },
//         error => {
//           console.error(error);
//           this.status = 'Error';
//         }
//       );
//     } else {
//       this.status = 'Invalid';
//     }
//   }
// }

@Component({
  selector: 'app-ported-numbers',
  templateUrl: './ported-numbers.component.html',
  styleUrls: ['./ported-numbers.component.css']
})
export class PortedNumbersComponent implements OnInit {
  portedForm: FormGroup;
  status: string | undefined;
  data: string | undefined;

  @ViewChild(PortingRequestsComponent) portingRequestsComponent!: PortingRequestsComponent;

  constructor(private fb: FormBuilder, private portingService: AddPortedService) {
    this.portedForm = this.fb.group({
      ID_Nsn: ['', [Validators.required, this.idNsnValidator]],
      donor: ['', Validators.required],
      recipient: ['', Validators.required],
      routingCode: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(2)]],
      date: ['', Validators.required],
      name: ['', Validators.required],
      edb: ['', [Validators.required, this.edbValidator]],
      comment: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  // idNsnValidator(control: AbstractControl): { [key: string]: boolean } | null {
  //   const value = control.value as number;
  //   if (!value) return null;

  //   const nsnString = value.toString();
  //   const length = nsnString.length;
  //   const nDC = parseInt(nsnString.slice(0, 1), 10);
  //   const sn = parseInt(nsnString.slice(1), 10);

  //   if (length === 8) {
  //     const validNDCs = [2, 3, 4, 7];
  //     if (validNDCs.includes(nDC) && !sn.toString().startsWith('0') && !sn.toString().startsWith('1')) {
  //       return null;
  //     }
  //   }

  //   if (length === 6) {
  //     const validNDCs = [2, 3, 4, 7];
  //     if (validNDCs.includes(nDC) && sn.toString().startsWith('15')) {
  //       return null;
  //     }
  //   }

  //   return { invalidIdNsn: true };
  // }

  idNsnValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const value = control.value as number;
    if (!value) return null;
  
    const nsnString = value.toString();
    const length = nsnString.length;
  
    // Проверка за 8 цифрен број
    if (length === 8) {
      const thirdDigit = parseInt(nsnString[2], 10);
      if (thirdDigit !== 0 && thirdDigit !== 1) {
        return null;
      }
    }
  
    // Проверка за 6 цифрен број
    if (length === 6) {
      const thirdDigit = parseInt(nsnString[2], 10);
      const fourthDigit = parseInt(nsnString[3], 10);
      if (thirdDigit === 1 && fourthDigit === 5) {
        return null;
      }
    }
  
    return { invalidIdNsn: true };
  }
  

  edbValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const value = control.value as string;
    if (!value) return null;

    const validLength = 13;
    if (value.length === validLength && /^\d+$/.test(value)) {
      // Овде може да се додаде и дополнителна логика за валидација на матичен број
      return null;
    }

    return { invalidEdb: true };
  }

  onSubmit() {
    if (this.portedForm.valid) {
      const { ID_Nsn, donor, recipient, routingCode, date, name, edb, comment } = this.portedForm.value;
      this.portingService.addPortingRequest(ID_Nsn, donor, recipient, routingCode, date, name, edb, comment).subscribe(
        (response: PortingResponse) => {
          if (response.status === 'OK') {
            this.status = 'Successful';
            this.portedForm.reset(); // Ресетирање на формата
            this.portingRequestsComponent.loadPortingRequests(); // Освежување на табелата
          } else {
            this.status = 'Error';
          }
          this.data = response.data;
        },
        error => {
          console.error(error);
          this.status = 'Error';
        }
      );
    } else {
      this.status = 'Invalid';
    }
  }
}