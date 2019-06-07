import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareseminarService implements OnInit{

  constructor() { }

ngOnInit(){}

  getSeminarData(){
    return JSON.parse(localStorage.getItem('seminar'));
  }
}
