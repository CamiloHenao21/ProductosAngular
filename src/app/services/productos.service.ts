import { Injectable } from '@angular/core';
import { Productos } from '../interfaces/productos';
import { Perfil } from '../interfaces/perfil';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private productos:Productos[] = [
    {   
      Id: "7123", 
      Nombre: "Computador Asus", 
      Caracteristica: "Asus", 
      Fecha: "2020-04-13", 
      Correo: "test@test.com", 
      Pais: "Colombia", 
      Precio: "1200000", 
      Disponible: "3", 
      Vendidas: "2", 
      Imagen: "./assets/img/asus.png"
    },
    {    
      Id: "7234", 
      Nombre: "Computador acer", 
      Caracteristica: "acer", 
      Fecha: "2020-04-13", 
      Correo: "test@test3.com", 
      Pais: "Colombia", 
      Precio: "1700000", 
      Disponible: "1", 
      Vendidas: "0", 
      Imagen: "./assets/img/acer.png"
    },
    {    
      Id: "7412", 
      Nombre: "Computador Lenovo", 
      Caracteristica: "Lenovo", 
      Fecha: "2020-04-13", 
      Correo: "test1@test1.com", 
      Pais: "Colombia", 
      Precio: "1300000", 
      Disponible: "5", 
      Vendidas: "7", 
      Imagen: "./assets/img/lenovo.png"
    },
    {    
      Id: "7435", 
      Nombre: "Computador HP", 
      Caracteristica: "HP", 
      Fecha: "2020-04-13", 
      Correo: "test@test.com", 
      Pais: "Colombia", 
      Precio: "1300000", 
      Disponible: "1", 
      Vendidas: "4", 
      Imagen: "./assets/img/hp.png"
    },
    {    
      Id: "7515", 
      Nombre: "Computador Sony", 
      Caracteristica: "Sony", 
      Fecha: "2020-04-13", 
      Correo: "test@test4.com", 
      Pais: "Colombia", 
      Precio: "1100000", 
      Disponible: "1", 
      Vendidas: "4", 
      Imagen: "./assets/img/sony.png"
    },
    {    
      Id: "7584", 
      Nombre: "Computador Apple", 
      Caracteristica: "Apple", 
      Fecha: "2020-04-13", 
      Correo: "test@htest.com", 
      Pais: "Colombia", 
      Precio: "1100000", 
      Disponible: "1", 
      Vendidas: "4", 
      Imagen: "./assets/img/apple.png"
    },
    {    
      Id: "7564", 
      Nombre: "Computador Dell", 
      Caracteristica: "Dell", 
      Fecha: "2020-04-13", 
      Correo: "test@dtest.com", 
      Pais: "Colombia", 
      Precio: "1705000", 
      Disponible: "1", 
      Vendidas: "1", 
      Imagen: "./assets/img/dell.png"
    },
    {    
      Id: "7564", 
      Nombre: "Computador Toshiba", 
      Caracteristica: "Toshiba", 
      Fecha: "2020-04-13", 
      Correo: "test@test5.com", 
      Pais: "Colombia", 
      Precio: "1380000", 
      Disponible: "3", 
      Vendidas: "2", 
      Imagen: "./assets/img/toshiba.png"
    }
  ];

  private perfil:Perfil[] = [
    {   
      Id: "1",
      Nombre: "Camilo",
      Correo: "camilo@test.com",
      Contraseña: "1234"
    }
  ];

  constructor() { }


  getProductos(){
    return this.productos;
  }


  getPerfil(){
    return this.perfil;
  }

  eliminarProducto(index : number){
    this.productos.splice(index, 1);
  }


  agregarProducto(productos:Productos){
    this.productos.unshift(productos);
  }

}

