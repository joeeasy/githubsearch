import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoaderComponent } from './component/loader/loader.component';
import { HomeComponent } from './component/home/home.component';
import { SearchComponent } from './component/search/search.component';
import { GithubSerivce } from './service/search/search.service';
import { FormsModule} from '@angular/forms';
import {  HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    HomeComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule, FormsModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'search', component: SearchComponent}
    ])
  ],
  providers: [GithubSerivce],
  bootstrap: [AppComponent]
})
export class AppModule { }
