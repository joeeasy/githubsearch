import { Component, OnInit } from '@angular/core';
import { GithubSerivce } from '../../service/search/search.service'
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  user;
  repos;
  username: string;
  showSpinner: boolean;

   constructor(private _gitService: GithubSerivce) {
     this.user = false;
     // this.showSpinner;
    //  console.log(this.username);
   }
   searchUser() {
    //  this.username = username;
     this._gitService.updateUser(this.username);
     console.log(this.username);
     this._gitService.getUser().subscribe(user => {
       console.log(user.items);
       this.user = user;
       this.showSpinner = true;

     })

     this._gitService.getRepos().subscribe(repos => {
      //  console.log(repos);
       this.repos = repos;
       this.showSpinner =  false;
     })
  }
}
