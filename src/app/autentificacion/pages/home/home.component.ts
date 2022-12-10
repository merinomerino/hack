import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  autentificado:boolean=false;
  //@Output() onAuth:EventEmitter<boolean>= new EventEmitter();

  constructor(
    private auth:AuthService,
    private router:Router
  ) { }

  ngOnInit() {
    console.log(this.autentificado)
    this.autentificado=this.auth.estaAutentificado();
    console.log(this.autentificado)
   
    
  }

  salir(){
        this.auth.logout();
        this.router.navigateByUrl('/login')
       
  }





  valida(a:any){
    console.log('estoy '  + a)
    this.autentificado= a;
  }

}
