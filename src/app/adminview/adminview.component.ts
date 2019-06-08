import { Component, OnInit } from '@angular/core';
import { ShareseminarService } from '../shareseminar.service';

@Component({
  selector: 'app-adminview',
  templateUrl: './adminview.component.html',
  styleUrls: ['./adminview.component.css']
})
export class AdminviewComponent implements OnInit {
seminarList = [];
public filterData = [];
public semid;
constructor(private shareseminarService: ShareseminarService) { 
  
}

ngOnInit() {
  this.seminarList = this.shareseminarService.getSeminarData();
  this.semid = this.seminarList[0].id;
  console.log('seminarlist', this.semid);
}

  onDetails(id){
    this.filterData = this.seminarList.filter(m => m.id === id);
    console.log(this.filterData)
  }
    
}
