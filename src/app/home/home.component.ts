import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {
  
  constructor(private data: DataService) {}

  ngOnInit() {
	//console.log(this.httpClient.get("http://localhost:8002/test"));
  }

  firstClick() {
    console.log('clicked');
   this.data.getUsers().subscribe(data => {
      this.users = data
      console.log(this.users)
    })
  }
}
