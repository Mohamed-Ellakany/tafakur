import { Component, HostListener, OnInit,  } from '@angular/core';
import { AzkarService } from '../azkar.service';

@Component({
  selector: 'app-azkar',
  templateUrl: './azkar.component.html',
  styleUrls: ['./azkar.component.scss']
})
export class AzkarComponent implements OnInit{

constructor( private _AzkarService:AzkarService){
}
  azkar=this._AzkarService.azkar


ngOnInit(): void {

}


}
