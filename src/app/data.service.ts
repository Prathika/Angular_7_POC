import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  
  getUsers() {

		console.log('getting predict');
		//console.log(this.http.post('http://172.31.24.185:8002/predict'));
		return this.http.get('http://localhost:8002/test');
		//return this.http.get('https://reqres.in/api/users');

	}
 
}
