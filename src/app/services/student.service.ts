import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private _http: HttpClient) { }

  addStudent(data:any): Observable<any>{
     return this._http.post('http://localhost:3000/student',data);
  }

  getAllStudents() : Observable<any> { 
      return this._http.get('http://localhost:3000/student');
  }

  deleteStudent(id : number) : Observable<any> {
     return this._http.delete(`http://localhost:3000/student/${id}`);
  }
}