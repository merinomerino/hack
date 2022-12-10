import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario:UsuarioModel = new UsuarioModel();
  recordarme=false;
  @Output() onAuth:EventEmitter<boolean>= new EventEmitter();


  constructor(
    private auth:AuthService,
    private router:Router
    ) { }

  ngOnInit() {
    if(localStorage.getItem('email')){
      this.usuario.email=''+localStorage.getItem('email');
      this.recordarme=true;
      this.onAuth.emit(this.auth.estaAutentificado())
    }
  }

  login(form: NgForm){
    if(form.invalid){return};
    // console.log(this.usuario)
    // console.log(form)
    Swal.fire({
      allowOutsideClick:false,
      icon:'info',
      text:'Espere por favor',
      showConfirmButton:false,
    })
    Swal.showLoading(Swal.getDenyButton());

    this.auth.login(this.usuario)
      .subscribe(resp=>{
        console.log(resp)
        Swal.close();

        if(this.recordarme){
          localStorage.setItem('email', this.usuario.email)
        }
        this.router.navigateByUrl('/misHacks')
      },(err)=>{
        console.log(err.error.error.message)
        Swal.fire({
          icon:'error',
          title:'Error al Autentificar',
          text:err.error.error.message
        })
      })
  }

}
