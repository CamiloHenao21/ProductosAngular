import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductosService } from 'src/app/services/productos.service';
import { Perfil } from '../../interfaces/perfil';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  perfil : Perfil[] = [];
  form: FormGroup;

  constructor(private fb:FormBuilder,
              private _productosService : ProductosService,
              private _snackBar: MatSnackBar,
              private router: Router) {


    this.form = this.fb.group({
      correo: ['', Validators.required],
      contraseña: ['', Validators.required],
    })
   }

  ngOnInit(): void {
  }

  ingresar(){
    const correo = this.form.value.correo
    const contraseña = this.form.value.contraseña

    // this.perfil = this._productosService.getPerfil();
    // console.log(this.perfil[correo]);
    // console.log(this.perfil.includes(contraseña));
    // console.log(this.perfil.includes(contraseña));
    // console.log(this.perfil.indexOf(correo));
    // console.log(this.perfil.indexOf(contraseña));
 
  
    if(correo == 'camilo@test.com' && contraseña == '1234'){
      this.router.navigate(['productos']);
    }
    else{
      this.error();
    }
  }


  error(){
    this._snackBar.open('El usuario no es valido', '', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });
  }

}
