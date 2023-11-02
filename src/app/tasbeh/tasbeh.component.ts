import { Component, Input, OnInit } from '@angular/core';
import { AzkarService } from '../azkar.service';
import { ActivatedRoute } from '@angular/router';
import {Title} from "@angular/platform-browser"
@Component({
  selector: 'app-tasbeh',
  templateUrl: './tasbeh.component.html',
  styleUrls: ['./tasbeh.component.scss']

})
export class TasbehComponent implements OnInit{

zekrName:any;
azkar=this._AzkarService.azkar
zekrValues:any;
;

constructor(private _ActivatedRoute:ActivatedRoute ,private _AzkarService:AzkarService , private titleService:Title){

this._ActivatedRoute.paramMap.subscribe((res:any)=>{
this.zekrName=res.params.name

})

}

ngOnInit(): void {
  for(let i =0 ; i<this.azkar.length ;i++)
{
if(this.azkar[i].name == this.zekrName){

this.zekrValues = this.azkar[i].value
this.titleService.setTitle(this.zekrName);

}

}


}


}
