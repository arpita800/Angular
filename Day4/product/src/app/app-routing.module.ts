import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './fruit/home/home.component';
import { Route } from '@angular/router';
import { EditComponent } from './fruit/edit/edit.component';
import { CreateComponent } from './fruit/create/create.component';

const routes: Routes = [
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
