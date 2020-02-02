import { Component } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rxjs-sample';

  constructor(private router: Router)
  {

  }

  goToMessage(){
    alert('messages');
    this.router.navigate([{outlets:{popup:['messages']}}]);
  }
}
