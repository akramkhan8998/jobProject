import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';
import { HomeComponent } from './home/home.component';
import { MainPageComponent } from './main-page/main-page.component';

import { TabsComponent } from './tabs/tabs.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardComponent,
    HomeComponent,
    MainPageComponent,
 
    TabsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
