import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'tafakur';
innerWidth !:number;

ngOnInit(): void {
  this.innerWidth= window.innerWidth ;
}




}
