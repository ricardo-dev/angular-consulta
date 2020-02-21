import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  formExample: FormGroup;
  contacts: FormArray;
  file: File;

  constructor(
    private fb: FormBuilder,
  ) { }

  getDataForm(){
    return this.fb.group({
      name: [null, [Validators.required]],
      cpf: [null, [Validators.required]],
      profileImage:[null],
      address: this.getAddressForm(),
      contacts: this.fb.array([this.createContact()])
    });
  }

  getAddressForm(){
    return this.fb.group({
      cep: [null, [Validators.required]],
      uf:[null],
      city:[null],
      neighborhood:[null],
      street:[null],
      complement:[null]
    });
  }

  createContact(): FormGroup{
    return this.fb.group({
      telephone: [null, [Validators.required]],
      email: [null]
    });
  }

  getFile(file: FileList){
    this.formExample.get('profileImage').setValue(file.item(0));
  }

  ngOnInit() {
    this.formExample = this.getDataForm();
  }

  addContact(){
    this.contacts = this.formExample.get('contacts') as FormArray;
    this.contacts.push(this.createContact());
  }

  removeContact(index: number){
    console.log('Remove index: '+index);
    this.contacts = this.formExample.get('contacts') as FormArray;
    this.contacts.removeAt(index);
  }

  clearAllContacts(){
    this.contacts = this.formExample.get('contacts') as FormArray;
    this.contacts.value.forEach((element, index) => {
      this.contacts.removeAt(index);
    });
  }

  submit(){
    if(this.formExample.invalid){
      console.log('Error');
      return ;
    } else {
      console.log(this.formExample)
      const obj = this.formExample.value;
      console.log(obj);
    }
  }

  get f(){
    return this.formExample.controls;
  }
}