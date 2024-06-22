import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './MyComponents/container/container.component';
import { NavComponent } from './MyComponents/nav/nav.component';
import { HeaderComponent } from './MyComponents/header/header.component';
import { NotificationComponent } from './MyComponents/notification/notification.component';
import { ListComponent } from './MyComponents/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    NavComponent,
    HeaderComponent,
    NotificationComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
