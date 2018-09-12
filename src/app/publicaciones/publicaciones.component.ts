import { Component, OnInit } from '@angular/core';
import { ConexionService } from '../services/conexion.service';

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.css']
})
export class PublicacionesComponent implements OnInit {

  items:any;

  editarItem:any = {
    name:''
  }

  constructor(private conexion:ConexionService) { 
    this.conexion.publicacionesItem().subscribe(item=>{
      this.items = item;
      console.log(this.items)
    });
  }

  ngOnInit() {
  }

  eliminar(item){
    this.conexion.eliminarItem(item);
  }

  editar(item){
    this.editarItem = item;
  }

  agregarItemEditado(){
    this.conexion.EditarItem(this.editarItem);
  }
}
