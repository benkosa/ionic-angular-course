import { Component, OnInit, OnDestroy } from '@angular/core';

import { PersonsService } from './persons.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html'
})

//pozriet si viac o lifecycle hooks v dokumentacii 33.
export class PersonsComponent implements OnInit, OnDestroy{
  personsList: string[];
  isFetching = false;

  private personsListSubs: Subscription;

  //skratka namiesto zzkomentovaneho kodu
  constructor(private prsService: PersonsService) {
    //this.personService = prsService;
  }

  ngOnInit() {
    this.isFetching = true;
    this.prsService.fetchPersons();

    this.personsListSubs = this.prsService.personsChanged.subscribe(persons => {
      this.personsList = persons;
      this.isFetching = false;
    });

  }

  onRemovePerson(person: string) {
    this.prsService.removePerson(person);
  }

  ngOnDestroy() {
    this.personsListSubs.unsubscribe();
  }
}
