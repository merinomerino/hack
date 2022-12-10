import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls:  ['./app.component.css']
})
export class AppComponent {
  title = 'hack';

  estoyAuth(valor:boolean){
  console.log('mi valor es' + valor)
  }


}
