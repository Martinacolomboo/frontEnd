import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit{
  banner:any;
  constructor(private datos:DatosService){}
  ngOnInit():void{
    this.datos.getDatos().subscribe(data =>{
      console.log(data);
      this.banner=data;
    });
  }
}
