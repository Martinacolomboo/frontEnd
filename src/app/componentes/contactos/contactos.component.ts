import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css']
})
export class ContactosComponent implements OnInit{
  redes:any;
  imagen:any;
  constructor(private datos:DatosService){}
  ngOnInit():void{
    this.datos.getDatos().subscribe(data =>{
      this.redes=data.redes;
      this.imagen=data;
    });
  }
}