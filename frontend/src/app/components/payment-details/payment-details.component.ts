import { Component, OnInit } from '@angular/core';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';
import { NgForm } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.css']
})
export class PaymentDetailsComponent implements OnInit {

  constructor(private service:PaymentDetailService,private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
    
    
  }
  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }
  onSubmit(form: NgForm) {
  
   
    if (this.service.formData.PMId == 0)
    this.insertRecord(form);
    else
      this.updateRecord(form);
      
  }





  insertRecord(form: NgForm) {
    this.service.postPaymentDetail().subscribe(
      res => {
        // debugger;
        alert("Success");
        console.log(res);
        this.resetForm(form);
        this.toastr.success('Submitted successfully', 'Payment Detail Register');
        this.service.refreshList();
      },
      err => {
        // debugger;
        console.log(err);
      }
    )
  }

  updateRecord(form: NgForm) {
    this.service.putPaymentDetail().subscribe(
      res => {
        this.resetForm(form);
        this.toastr.info('Updated successfully', 'Payment Detail Register');
        this.service.refreshList();
      },
      err => {
        console.log(err);
      }
    )
  }

  resetForm(form?: NgForm){
    if (form != null)
    form.resetForm();

    this.service.formData={
      PMId:0,
      CardNumber:'',
      ExpirationDate:'',
      CardOwnerName:'',
      CVV:''
    };
  }

}
