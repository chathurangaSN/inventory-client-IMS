import { Component, OnInit } from '@angular/core';

import { reject } from 'q';
import { ToastrService } from 'ngx-toastr';
import { StockServiceService } from 'src/app/views/stock/stock-home/service/stock-service.service';
import { Batch } from 'src/app/views/stock/stock-home/model/batch.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-batch-stock',
  templateUrl: './batch-stock.component.html',
  styleUrls: ['./batch-stock.component.css']
})
export class BatchStockComponent implements OnInit {


  batchDetailsModel = {
    id: null, number: null, expireDate: null, manufactureDate: null,
    receivedDate: null, unitePrice: null, salesPrice: null
  };

  test = "SUBMIT";

  constructor(private service: StockServiceService, private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
    this.service.RefreshBatchDetails("first");
  }


  // reset form if id is not their
  resetForm(form?: NgForm) {
    if (form != null){
      form.resetForm();
      this.test = "SUBMIT";
    }else{
      this.service.batchDetails = {

        id: null,
        number: null,
        expireDate: null,
        manufactureDate: null,
        receivedDate: null,
        unitePrice: null,
        salesPrice: null
  
      }
      this.test = "SUBMIT";
     
    } 
  }

  cleardetails(){
    this.test = "SUBMIT";
  }
  // on submit button click
  onSubmit(form: NgForm) {
    // 2019-05-23
    if (form.value.id == null) {
      let payload = {
        // "id": 1,
        "number": this.service.batchDetails.number,
        "expireDate": this.service.batchDetails.expireDate,
        "manufactureDate": this.service.batchDetails.manufactureDate,
        "receivedDate": this.service.batchDetails.receivedDate,
        "unitePrice": this.service.batchDetails.unitePrice,
        "salesPrice": this.service.batchDetails.salesPrice
      }
      console.log("this is insert the payload");
      console.log(payload);
      this.insertBatch(payload, form);
    } else {

      let payload = {
        "id": this.service.batchDetails.id,
        "number": this.service.batchDetails.number,
        "expireDate": this.service.batchDetails.expireDate,
        "manufactureDate": this.service.batchDetails.manufactureDate,
        "receivedDate": this.service.batchDetails.receivedDate,
        "unitePrice": this.service.batchDetails.unitePrice,
        "salesPrice": this.service.batchDetails.salesPrice
      }
      console.log("this is update the payload");
      console.log(payload);
      this.updateBatch(payload, form);
    }

  }

  // insert new log entry
  insertBatch(payload, form: NgForm) {
    let response;
    this.service.postBatchDetails(payload).subscribe(res => {
      this.resetForm(form);
      response = res;
      console.log(response);
      this.toastr.success(response.message, response.status);
      this.service.RefreshBatchDetails("second");

    },
      err => {
        reject(err)
        this.toastr.error(err.error.message, err.error.status);
                console.log(err);
      });
  }

  // update batch log
  updateBatch(payload, form: NgForm){
    let response;
    this.service.putBatchDetails(payload).subscribe(res => {
      this.resetForm(form);
      response = res;
      console.log(response);
      this.toastr.success(response.message, response.status);
      this.service.RefreshBatchDetails("second");
    },
      err => {
        reject(err)
        this.toastr.error(err.error.message, err.error.status);
        console.log(err);
        // console.log(err.error.response);
      });
  }

  // load table details into form with id
  populateForm(batchDetails: Batch){
    this.service.batchDetails = Object.assign({}, batchDetails);
    this.test = "UPDATE";

  }

   // delete record from table
  onDelete(id: number){
    if (confirm("Are you sure you want to delete this record? ")) {

      let response;
      this.service.deleteBatchDetails(id).subscribe(res => {

        response = res;
        console.log(response);
        this.toastr.success(response.message, response.status);
        this.service.RefreshBatchDetails("first");
      },
        err => {
          reject(err)
          this.toastr.error(err.error.message, err.error.status);
          console.log(err);
        });
    }
  }

}
