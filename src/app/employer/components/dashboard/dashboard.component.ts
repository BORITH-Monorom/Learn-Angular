import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
constructor(private fb: FormBuilder){}
  ngOnInit(): void {
    this.userForm = new FormGroup({
      username: new FormControl(""),
      password: new FormControl(""),
      confirmPassword: new FormControl(""),
      address: new FormGroup({
        address: new FormControl(""),
        city: new FormControl(""),
        state: new FormControl(""),
        zip: new FormControl("")
      })
    });

  }

  userForm: FormGroup;
  onClear(){
    this.userForm.reset();
    // this.username.setValue("");
  }

  stateOption:any = [
    {value: "AL", name: "Alabama"},
    {value: "AK", name: "Alaska"},
    {value: "AZ", name: "Arizona"},
    {value: "AR", name: "Arkansas"},
    {value: "CA", name: "California"},
    {value: "CO", name: "Colorado"},
    {value: "CT", name: "Connecticut"},
    {value: "DE", name: "Delaware"},
    {value: "DC", name: "District Of Columbia"},
    {value: "FL", name: "Florida"},
    {value: "GA", name: "Georgia"},
    {value: "HI", name: "Hawaii"},
    {value: "ID", name: "Idaho"},
    {value: "IL", name: "Illinois"},
    {value: "IN", name: "Indiana"},
    {value: "IA", name: "Iowa"},
    {value: "KS", name: "Kansas"},
    {value: "KY", name: "K"},
  ]
  onSubmit(){
    console.log(this.userForm.value);
  }
}
