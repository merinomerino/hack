import { Component, OnInit } from '@angular/core';
import { HackModel } from 'src/app/models/heroe.model';
import { FirebaseService } from 'src/app/services/firebase.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-mis-hacks',
  templateUrl: './mis-hacks.component.html',
  styleUrls: ['./mis-hacks.component.css']
})
export class MisHacksComponent implements OnInit {

  hacks: HackModel[] = [];
  cargando = false;


  

  constructor( private hackServices: FirebaseService ) { }

  ngOnInit() {

    this.cargando = true;
    this.hackServices.getHacks()
      .subscribe( (resp:any) => {
        this.hacks = resp;
        this.cargando = false;
      });

  }

  borrarHeroe( hack: HackModel, i: number ) {

    Swal.fire({
      title: '¿Está seguro?',
      text: `Está seguro que desea borrar a ${ hack.nombre }`,
      icon: 'question',
      showConfirmButton: true,
      showCancelButton: true
    }).then( resp => {

      if ( resp.value ) {
        this.hacks.splice(i, 1);
        this.hackServices.borrarHack( hack.id ).subscribe();
      }

    });



  }


}
