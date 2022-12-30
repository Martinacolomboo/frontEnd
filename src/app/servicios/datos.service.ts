
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//suscribirse a los datos y q reciba respuestas asincrona
import { Observable } from 'rxjs';
//hacer peticiones y CRUD

@Injectable({
  providedIn: 'root'
})
export class DatosService {
//http=alias
  constructor(private http: HttpClient) { }
//metodo Observable q devuelve datos 
  getDatos():Observable<any>{
    //retorno de datos utilizando el metodo get ed HTTPClient q 
    //llama a la base de datos JSON o a una URL
    return this.http.get('./assets/db/datos.json');
    //aca podria poner un callback para ver la opcion de problema de conexion del servidor
  }
}
