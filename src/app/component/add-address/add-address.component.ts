import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HttpServicesService } from 'src/app/services/http-services.service';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.scss']
})
export class AddAddressComponent implements OnInit {

addressBookFormGroup: FormGroup;


  constructor(private formBuilder: FormBuilder,public dialogRef: MatDialogRef<AddAddressComponent>,
    private httpService: HttpServicesService ,private router: Router, @Inject(MAT_DIALOG_DATA) public data: any) {
      
      this.addressBookFormGroup =this.formBuilder.group({
        firstName : new FormControl('', [Validators.required, Validators.pattern("^[A-Z][a-zA-z\\s]{2,}$")]),
        phone : new FormControl('',Validators.required),
        address : new FormControl('',Validators.required),
        city: new FormControl('',Validators.required),
        state: new FormControl('',Validators.required),
        zip: new FormControl('',[Validators.required, Validators.pattern("^[0-9]{3}\\s{0,1}[0-9]{3}$")]),
    
      });

    }
    public checkError = (controlName: string, errorName: string) => {
      return this.addressBookFormGroup.controls[controlName].hasError(errorName);
    }

    ngOnInit(): void {
    
      console.log(this.data.value);
      if (this.data != null) {
        this.addressBookFormGroup.patchValue({
          firstName: this.data.firstName,
         phone: this.data.phone,
          address: this.data.address,
          city: this.data.city,
          state: this.data.state,
         zip: this.data.zip
        });
       
      }
    
  }

  
  onSubmit(): void {
    if(this.data.contactId!= undefined){
      this.httpService.updateAddressData(this.data.contactId,this.addressBookFormGroup.value).subscribe(response=> {
        console.log(response);
        console.log(this.addressBookFormGroup.value);    
      });
      this.router.navigate(['']);
      
    }  
    else {
    this.httpService.addAddressData(this.addressBookFormGroup.value).subscribe(response=> {
      console.log(response);
      console.log(this.addressBookFormGroup.value);
      this.router.navigate(['']);
    
     
    });
    this.dialogRef.close();
    this.router.navigate(['']);
    
  }
 
  }
}
