import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { CameriteService, Contacts } from '../camerite.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  myForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    province: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    message: new FormControl(''),
  });
  contact: Contacts;

  constructor(public cameriteService: CameriteService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.contact = this.myForm.value;
    this.cameriteService.postForm(this.contact).subscribe((res) => {
      console.log(this.contact)
      this.myForm.reset({name: '', email: '', phone: '', province: '', city: '', message: ''})
    })
  }


}
