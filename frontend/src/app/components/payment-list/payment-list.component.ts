import { Component, OnInit } from '@angular/core';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';
import { PaymentDetail } from './../../shared/payment-detail.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment-list',
  templateUrl: './payment-list.component.html',
  styleUrls: ['./payment-list.component.css']
})
export class PaymentListComponent implements OnInit {

  constructor(private service:PaymentDetailService,private toastr:ToastrService ) { }

  ngOnInit() {
    this.service.refreshList();
  }

  populateForm(pd: PaymentDetail) {
    this.service.formData = Object.assign({}, pd);
  }

  onDelete(id){
  
    if (confirm('Are you sure to delete this record ?')) {
      this.service.deletePaymentDetail(id)
        .subscribe(res => {
          this.service.refreshList();
          this.toastr.warning('Deleted successfully', 'Payment Detail Register');
        },
          err => {
            debugger;
            console.log(err);
          })
    }
  }





}
