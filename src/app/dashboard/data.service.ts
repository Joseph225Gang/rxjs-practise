import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  user = {
    name: 'Mason',
    age: 19,
    profession: 'Footballer'
  }
  constructor() { }

  getData(): Observable<any>{
    return new Observable((o)=>{
      setTimeout(()=>{
        o.next(this.user);
      }, 1000)
    })
  }
}