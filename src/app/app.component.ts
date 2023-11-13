import { Component, HostBinding, HostListener, Input, OnInit, Renderer2, NgModule, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'tafakur';


mode:string ="light"

constructor(private _Renderer2:Renderer2){}
ngOnInit(): void {

this.checkMode()

}

  changeTheme(){

  this.mode=="light" ? this.mode="dark" : this.mode = "light";
  this.checkMode()

}

checkMode()
{

if(this.mode=="light"){
  this._Renderer2.setStyle(document.body, 'background-image', `url("./assets/background\ 1.png")`);

}else{

  this._Renderer2.setStyle(document.body, 'background-image', `url("./assets/dark/DarkBackGround.png")`);

}
}


@HostListener('window:scroll')
onScrollUp():boolean{

if(window.scrollY>300){
return true

}

else{
return false
}
}

onScrollDown(){
   if (window.scrollY >= document.body.scrollHeight-1000){
    return false
  }else{
    return true
  }
}



 scrollUp(){

  window.scrollTo(0,0)
 }

scrollDown(){
  window.scrollTo(0, document.body.scrollHeight)

}

}

