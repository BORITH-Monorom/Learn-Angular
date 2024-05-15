import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Student } from 'src/app/core/model/student';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
dataSource: MatTableDataSource<Student>;
displayedColumns:string[] = ['first_name', 'last_name', 'email', 'mobile','actions'];
constructor(private fb: FormBuilder, private data: DataService){}
studentObj: Student = {
  id: '',
  first_name: '',
  last_name: '',
  email: '',
  mobile: ''
};
studentsList: Student[]=[];
id: string = '';
first_name: string = '';
last_name: string = '' ;
email: string = '' ;
mobile: string = '' ;

ngOnInit(): void {
  this.getAllStudents();
}

ErrorNameMessage:string;
ErrorMessage: string;
f_lastName  = new FormControl('', [Validators.required, Validators.minLength(5)])
f_email = new FormControl('', [Validators.required, Validators.email])
checkMessageError(){
  if(this.f_email.hasError('required') || this.f_lastName.hasError('required')){
    	this.ErrorMessage = 'value is required';
    	this.ErrorNameMessage = 'value is required';
  }else if(this.f_email.hasError('email')){
    this.ErrorMessage ='Please enter a valid'
  }else if(this.f_lastName.hasError('minLength')){
    this.ErrorNameMessage ='Minimum length is 5'
  }
}


getAllStudents(){
  this.data.getAllStudents().subscribe({
    next:res =>{
    // this.studentsList = res.map((e:any)=>{
    //   const data = e.payload.doc.data();
    //   data.id = e.payload.doc.id;
    //   return data;
    // });
    this.dataSource = new MatTableDataSource<Student>(res.map((e:any)=>{
      const data = e.payload.doc.data();
      data.id = e.payload.doc.id;
      console.log(data,"datas");
      return data;
    }));
    console.log(this.dataSource ,"datasource");
  },
  error: (err) =>{
    console.error('Error While fetching student data',err);
  },
});

}

resetForm(){
  this.id= '',
  this.first_name= '',
  this.last_name= '',
  this.email= '',
  this.mobile= ''
}

// add student
addStudent(){
  if(this.first_name == '' || this.last_name == '' || this.email == '' || this.mobile == ''){
    alert ('Please fill al the fields');
    return
  }

  this.studentObj.id = '';
  this.studentObj.email = this.email;
  this.studentObj.first_name = this.first_name;
  this.studentObj.last_name = this.last_name;
  this.studentObj.mobile = this.mobile;
  this.data.addStudent(this.studentObj);
  this.resetForm();
  console.log(this.studentObj);
}

//update Student
updateStudent(){

}

//delete Student
deleteStudent(student: Student){
  if(window.confirm('Are you sure you want to delete '+student.first_name+' '+student.last_name+' ?')){
    this.data.deleteStudent(student);
  }
  this.data.deleteStudent(student);
}

}
