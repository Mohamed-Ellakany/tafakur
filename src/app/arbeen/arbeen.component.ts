import { Component } from '@angular/core';
import { AzkarService } from '../azkar.service';

@Component({
  selector: 'app-arbeen',
  templateUrl: './arbeen.component.html',
  styleUrls: ['./arbeen.component.scss'],


})
export class ArbeenComponent {
repeat:number=1
  constructor( private _AzkarService:AzkarService){
  }
    arbeen=this._AzkarService.arbeen



}
