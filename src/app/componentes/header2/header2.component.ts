import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-header2',
  templateUrl: './header2.component.html',
  styleUrls: ['./header2.component.css']
})
export class Header2Component implements OnInit {
  red:any;
  foto:any;
  constructor(private datos:DatosService){}

  ngOnInit():void{
    this.datos.getDatos().subscribe(data =>{
      this.red= data.redes;
      this.foto=data;
    })
  }
}
