import { Component } from '@angular/core';

import { PersonsService } from './persons.service';

@Component ({
  selector:'app-person-input',
  templateUrl: './persons-input.component.html',
  styleUrls: ['./person-input.component.css']
})

export class PersonInputComponent  {

  enteredPersonName: string;

  constructor(private personsService: PersonsService) {}

  onCreatePerson() {

    console.log(this.enteredPersonName);
    this.personsService.addPerson(this.enteredPersonName);
    this.enteredPersonName = '';

  }
}
