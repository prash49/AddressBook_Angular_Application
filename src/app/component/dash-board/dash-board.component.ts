import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { HttpServicesService } from 'src/app/services/http-services.service';
import { AddAddressComponent } from '../add-address/add-address.component';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss']
  
})
export class DashBoardComponent implements OnInit {
  addressDetails: any;
  addressCount; number;
  sortedDetails: any;
  
  orderHeader: any = 'firstName';
  reverse:boolean = false;
   

  constructor(public dialog: MatDialog,  private httpService: HttpServicesService, private router: Router) { }

  ngOnInit(): void {
    
  this.loadData(); 
  
  }
 
  loadData(): void {

    this.httpService.getAllAddressData().subscribe(response=>{
      this.addressDetails = response.data;
      this.addressCount= this.addressDetails.length;
      console.log(this.addressDetails);
      this.sortedDetails = this.addressDetails.map
    });
    
  }

  
  
  sort(headerName){
    this.orderHeader = headerName;
    this.reverse = !this.reverse;
  }

  delete(id: number) {
    this.httpService.deleteAddress(id).subscribe(data=> {
      console.log(data.data);
      this.ngOnInit();      
    });
  }

  update(address) {
    console.log(address);
    const dialogRef = this.dialog.open(AddAddressComponent, {
      data:address
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.ngOnInit();
    });
    
  }
  
 
}
