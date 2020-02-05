import { Component } from '@angular/core';
import { Router} from '@angular/router';
import { AuthService } from '../app/user/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rxjs-sample';

  constructor(private router: Router,private authService: AuthService)
  {

  }

  goToMessage(){
    alert('messages');
    this.router.navigate([{outlets:{popup:['messages']}}]);
  }

  login(){
    this.authService.login("admin");
  }

}
