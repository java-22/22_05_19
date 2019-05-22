import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MainPageComponent} from './main-page/main-page.component';
import {ListPageComponent} from './list-page/list-page.component';
import {RouterModule, Routes} from '@angular/router';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { InfoPageComponent } from './info-page/info-page.component';

const routs: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'list', component: ListPageComponent, children:[
      {path:':name/:age/:phone', component:InfoPageComponent}
    ]},
  // {path: '**', redirectTo: ''}
  {path: '**', component:NotFoundPageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ListPageComponent,
    NotFoundPageComponent,
    InfoPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routs)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
