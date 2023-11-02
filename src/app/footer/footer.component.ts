import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
innerWidth!:boolean

constructor(){}
ngOnInit(): void {
  this.checkWidth()
}
checkWidth(){
  if(window.innerWidth <= 500){
    this.innerWidth=false
}else{

  this.innerWidth=true
}


}
}
