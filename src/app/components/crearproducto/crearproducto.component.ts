import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductosService } from '../../services/productos.service';
import { Productos } from '../../interfaces/productos';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-crearproducto',
  templateUrl: './crearproducto.component.html',
  styleUrls: ['./crearproducto.component.css']
})
export class CrearproductoComponent implements OnInit {

  crearProducto: FormGroup;
  pais: any[] = ['Colombia', 'Estados Unidos', 'España']

  constructor(private fb: FormBuilder,
              private router: Router,
              private _snackBar: MatSnackBar,
              private _productosService: ProductosService) { 
                
    this.crearProducto = this.fb.group({
      id: ['', Validators.required],
      nombre: ['', Validators.required],
      caracteristica: ['', Validators.required],
      fecha: ['', Validators.required],
      correo: ['', Validators.required],
      pais: ['', Validators.required],
      precio: ['', Validators.required],
      disponible: ['', Validators.required],
      vendidas: ['', Validators.required],
      imagen: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  agregarProducto(){

    const producto: Productos = {
      Id: this.crearProducto.value.id,
      Nombre: this.crearProducto.value.nombre,
      Caracteristica: this.crearProducto.value.caracteristica,
      Fecha: this.crearProducto.value.fecha,
      Correo: this.crearProducto.value.correo,
      Pais: this.crearProducto.value.pais,
      Precio: this.crearProducto.value.precio,
      Disponible: this.crearProducto.value.disponible,
      Vendidas: this.crearProducto.value.vendidas,
      Imagen: this.crearProducto.value.imagen
    }

    this._productosService.agregarProducto(producto);
    this.router.navigate(['/productos']);

    
    this._snackBar.open('El Producto se ha guardado', '', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });
  }

}
