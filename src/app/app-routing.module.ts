/**
 * Created by deepakkhetwal on 3/5/17.
 */

import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import {FeedbackComponent} from "./feedback/feedback.component";
import {JokeListComponent} from "./joke-list/joke-list.component";
import {MostLikedJokeListComponent} from "./most-liked-joke-list/most-liked-joke-list.component";
import {SubscribeComponent} from "./subscribe/subscribe.component";
import {ContactUsComponent} from "./contact-us/contact-us.component";

const appRoutes: Routes = [
  {path: 'contact-us', component: ContactUsComponent},
  {path: 'feedback', component: FeedbackComponent},
  {path: 'joke-list', component: JokeListComponent},
  {path: 'most-liked-joke-list', component: MostLikedJokeListComponent},
  {path: 'subscribe', component: SubscribeComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
