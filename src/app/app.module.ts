import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { JokeListComponent } from './joke-list/joke-list.component';
import { MostLikedJokeListComponent } from './most-liked-joke-list/most-liked-joke-list.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FeedbackComponent } from './feedback/feedback.component';
import {AppRoutingModule} from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    JokeListComponent,
    MostLikedJokeListComponent,
    SubscribeComponent,
    ContactUsComponent,
    FeedbackComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
