import {Component, OnInit ,EventEmitter ,Output} from '@angular/core';
import { ShopService as ShopService } from '../shop-api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-shop',
  templateUrl: './create-shop.component.html',
  styleUrls: ['./create-shop.component.css']
})
export class CreateShopComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  @Output() myEvent = new EventEmitter();
  constructor(private formBuilder: FormBuilder , private shopService :ShopService ) { }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
          shopName: ['', Validators.required],
          address: ['', Validators.required],
          category: ['', [Validators.required]],
          latitude: ['', [Validators.required]],
          longitude: ['', Validators.required],
          ownerName: ['', Validators.required]
      });
  }

  
  get f() { return this.registerForm.controls; }

  onSubmit() {
    console.log('submited');
      this.submitted = true;
      // stop here if form is invalid
      if (this.registerForm.invalid) {
         return false;
      }
      console.log('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
      this.shopService.createShop(JSON.stringify(this.registerForm.value));
  }

  
}