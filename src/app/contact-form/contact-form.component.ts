import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
// import { AngularFire } from 'angularfire2';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder, private db: AngularFireDatabase) {
    // this.contactForm();
   }

  ngOnInit() {
      this.contactForm = new FormGroup({
        'name': new FormControl(null, Validators.required),
        'email': new FormControl(null, [Validators.required, Validators.email]),
        'company': new FormControl(null, Validators.required),
        'phone': new FormControl(null, Validators.required),
        'product': new FormControl(null, Validators.required),
        'quantity': new FormControl(null, Validators.required),
        'message': new FormControl(null, Validators.required)
      });
  }

  onSubmit() {
    const {name, email, company, phone, product, quantity, message} = this.contactForm.value;
    const html= `
      <div>From: ${name}</div>
      <div>Email: <a href="mailto:${email}"> ${email}</a></div>
      <div>Company: ${company} </div>
      <div>Phone: ${phone}</div>
      <div>Product: ${product}</div>
      <div>Quantity: ${quantity}</div>
      <div>Message: ${message}</div>
      `;

      let formRequest = { name, email, company, phone, product, quantity, message, html};

      this.db.database.ref('/messages').push(formRequest);
      this.contactForm.reset();
  }
}



    // this.contactForm = new FormGroup({
    //   'name': new FormControl(null, Validators.required),
    //   'email': new FormControl(null, [Validators.required, Validators.email]),
    //   'company': new FormControl(null, Validators.required),
    //   'phone': new FormControl(null, Validators.required),
    //   'product': new FormControl(null, Validators.required),
    //   'quantity': new FormControl(null, Validators.required),
    //   'message': new FormControl(null, Validators.required)
    // })
