import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent {
  itemDetails;
  detailsForm: FormGroup;
  genders: string[] = ['Male', 'Female'];
  constructor(private activatedRoute: ActivatedRoute,private router:Router,private formBuilder: FormBuilder){
    this.activatedRoute.params.subscribe((data) => {this.itemDetails = data});
    console.log("abc->",this.itemDetails);
    this.detailsForm = this.formBuilder.group({
      name :['', [Validators.required, Validators.required]],
      price:['', [Validators.required, Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      gender:['', [Validators.required, Validators.required]],
      mobile:['', [Validators.required, Validators.required]],
      address:['', [Validators.required, Validators.required]],
    });
  };
 
  goBack() {
    if (this.detailsForm.valid) {
      this.router.navigate(['/item-list']);
    }
  }
  logout() {
    this.router.navigate(['/login']);
    sessionStorage.clear();
  }
  
}