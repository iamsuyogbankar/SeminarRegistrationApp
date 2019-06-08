import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ShareseminarService } from '../shareseminar.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup
  public seminarInvitee = [];

  constructor(private fb: FormBuilder, private shareSeminar:ShareseminarService) {

    this.registrationForm = this.fb.group({
      name: ['', [Validators.required]],
      mobilenumber: ['', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(10), Validators.maxLength(10)]],
      // adharcard: ['', [Validators.required, Validators.pattern("^\d{4}\s\d{4}\s\d{4}$")]],
      adharcard: ['', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(12), Validators.maxLength(12)]],
      pancard: ['', [Validators.required, Validators.pattern("^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$")]],
      eid: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      currcompany: ['', [Validators.required]],
      jprofile: ['', [Validators.required]],
      jdate: ['', [Validators.required]],
      hqulification: ['', [Validators.required]],
      graduation: ['', [Validators.required]],
      yptwelth: ['', [Validators.required]],
      ypten: ['', [Validators.required]]      
    });
   }

  ngOnInit() {
  }

  // get f() { return this.registrationForm.controls; }

  onRegistraionSubmit(){
    // localStorage.clear();
    var previousDetails = JSON.parse(localStorage.getItem('seminar')) || [];
    var count = previousDetails.length;

    if(count < 1)
    {
      var id = 1
    }
    else {
      var id = ++count;
    }

    var seminarRegistration = {
      'id': id,
      'name': this.registrationForm.value.name,
      'number': this.registrationForm.value.mobilenumber,
      'adharno': this.registrationForm.value.adharcard,
      'pancardno': this.registrationForm.value.pancard,
      'email': this.registrationForm.value.eid,
      'company': this.registrationForm.value.currcompany,
      'jobprofile': this.registrationForm.value.jprofile,
      'joiningdate': this.registrationForm.value.jdate,
      'highestql': this.registrationForm.value.hqulification,
      'graduation': this.registrationForm.value.graduation,
      'twelth': this.registrationForm.value.yptwelth,
      'tenth': this.registrationForm.value.ypten
    }

    previousDetails.push(seminarRegistration);

    localStorage.setItem("seminar", JSON.stringify(previousDetails));

    this.seminarInvitee = this.shareSeminar.getSeminarData(); 
    console.log('seminar data', this.seminarInvitee);
    if(this.registrationForm.value == null)
    {
      return false;
    }
    
    this.registrationForm.reset();

    
  }

}
