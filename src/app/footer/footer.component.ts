import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent  {
innerWidth!:boolean
theme:string="light"
constructor(){
  this.themeMode = new EventEmitter<string>
}


@Output() themeMode:EventEmitter<string>

changeTheme(){


this.themeMode.emit(this.theme)

}






}
