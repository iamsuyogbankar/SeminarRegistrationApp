import { Component, OnInit } from '@angular/core';
import { ShareseminarService } from '../shareseminar.service';

@Component({
  selector: 'app-adminview',
  templateUrl: './adminview.component.html',
  styleUrls: ['./adminview.component.css']
})
export class AdminviewComponent implements OnInit {
seminarList = [];
  constructor(private shareseminarService: ShareseminarService) { }

  ngOnInit() {
    this.seminarList = this.shareseminarService.getSeminarData();

    console.log('seminarlist', this.seminarList)
  }
  listView(){
    
  }
  gridView(){

  }
}
