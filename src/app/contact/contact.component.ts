import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Feedback, ContactType } from '../shared/feedback';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
 
  feedbackForm: FormGroup;
  feedback: Feedback;
  contacttype: string[];
  @ViewChild('fform') feedbackFormDirective;

  constructor(private fb: FormBuilder) { 
    this.createForm();
  }

  ngOnInit() {
    this.contacttype = ContactType;
  }

  createForm(){
    this.feedbackForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['',Validators.required],
      telnum: [0,Validators.required],
      email: ['',Validators.required],
      contacttype: ['None',Validators.required],
      agree: [false,Validators.required],
      message: ['',Validators.required],
    });
  }

  onSubmit(){
    this.feedback = this.feedbackForm.value;
    console.log(this.feedback);
    this.feedbackForm.reset({
      firstName:'',
      lastName: '',
      telnum: 0,
      email: '',
      contacttype: 'None',
      agree: false,
      message: '',
    });
    this.feedbackFormDirective.resetForm();
  }
}
