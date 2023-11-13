import { Component, OnInit } from '@angular/core';
import { SalahTimesService } from '../salah-times.service';


@Component({
  selector: 'app-pray',
  templateUrl: './pray.component.html',
  styleUrls: ['./pray.component.scss']
})
export class PrayComponent implements OnInit{

salahTimes!:any

  constructor(private _SalahTimesService:SalahTimesService){}


ngOnInit(): void {

this._SalahTimesService.getSalahTimes().subscribe({
  next:(res)=>{

this.salahTimes=res.data?.timings
console.log(this.salahTimes);

  },

})

//this._SalahTimesService.getSalahTimes().subscribe({
//   next:(res)=>{

// this.salahTimes=res.items
//   },

// })

}


}
