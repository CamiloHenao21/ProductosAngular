import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
//
import { Productos } from 'src/app/interfaces/productos';
import { ProductosService } from '../../services/productos.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
// import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  filtro = '';
  productos : Productos[] = [];

  dataSource = new MatTableDataSource(this.productos);

  constructor( private _productosService : ProductosService, 
               private _snackBar: MatSnackBar ) { }
    
    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;

    
    ngOnInit(): void {

    this.productos = this._productosService.getProductos();

  }
    
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  eliminarProducto(index: number){
    this._productosService.eliminarProducto(index);
    this.productos = this._productosService.getProductos();

    this._snackBar.open('El Producto se ha eliminado', '', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });
  }

}
