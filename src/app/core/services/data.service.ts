import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { PageEvent } from '@angular/material/paginator';
import { Observable } from 'rxjs';
import { Student } from '../model/student';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class DataService {
    handlePageEvent(event: Event | undefined, PageEvent: PageEvent) {
      throw new Error('Method not implemented.');
    }

    constructor(private http: HttpClient, private afs:  AngularFirestore ){}
    PhotoUrl = 'https://jsonplaceholder.typicode.com/photos';
    postUrl = 'https://jsonplaceholder.typicode.com/posts';

    getPhotoData(): Observable<any>{
      return this.http.get(this.PhotoUrl);
    }
    getPostData(): Observable<any>{
      return this.http.get(this.postUrl);
    }



    // add student
    addStudent(student: Student){
      student.id =this.afs.createId();
      return this.afs.collection('/Students').add(student);
    }

    // get all students
    getAllStudents(){
      return this.afs.collection('/Students').snapshotChanges();
    }

    // delete student
    deleteStudent(student: Student){
      return this.afs.doc('/Students/'+student.id).delete();
    }

    // update student
    updateStudent(student: Student){
      this.deleteStudent(student);
      this.addStudent(student);
    }
  }


