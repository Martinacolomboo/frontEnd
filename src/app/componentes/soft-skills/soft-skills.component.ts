import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-soft-skills',
  templateUrl: './soft-skills.component.html',
  styleUrls: ['./soft-skills.component.css']
})
export class SoftSkillsComponent implements OnInit{
    skills:any;
    lenguajes:any;
    constructor(private datos:DatosService){}
    ngOnInit():void{
      this.datos.getDatos().subscribe(data =>{
        this.lenguajes=data.lenguajes;
        this.skills=data.habilidades;

      });
    }
  }
  


