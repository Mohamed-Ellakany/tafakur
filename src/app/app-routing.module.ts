import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrayComponent } from './pray/pray.component';
import { AzkarComponent } from './azkar/azkar.component';
import { TasbehComponent } from './tasbeh/tasbeh.component';
import { ArbeenComponent } from './arbeen/arbeen.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path:'',redirectTo:'pray',pathMatch:'full'},
  {
  path:'pray',component:PrayComponent , title:`مواقيت الصلاة`
},
{
  path:'azkar',component:AzkarComponent ,title:`الاذكار`
},
{
  path:'arbeen',component:ArbeenComponent, title:`الأربعين النووية`
}
,
{
  path:'tasbeh/:name',component:TasbehComponent 
},
{
  path:"**" , component:NotFoundComponent ,title:`error 404 `
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
