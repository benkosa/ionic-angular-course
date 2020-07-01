import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})

export class PersonsService {
  personsChanged = new Subject<string[]>();

  persons: string[];

  constructor(private http: HttpClient) {}

  fetchPersons () {
    this.http
      .get<any>('https://swapi.dev/api/people')
      .pipe(map(resData => {
        console.log(resData);
        return resData.results.map(character => character.name);
      }))
      .subscribe(transformedData => {
        console.log(transformedData);
        this.personsChanged.next(transformedData);
      });
  }

  addPerson(name: string) {
    this.persons.push(name);
    this.personsChanged.next(this.persons);
  }

  removePerson(name) {
    this.persons = this.persons.filter(person => {
      return person !== name;
    });
    this.personsChanged.next(this.persons);
  }
}
