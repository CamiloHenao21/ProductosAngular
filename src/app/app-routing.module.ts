import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './components/productos/productos.component';
import { CrearproductoComponent } from './components/crearproducto/crearproducto.component';
import { HomeComponent } from './components/home/home.component';
import { PerfilComponent } from './components/perfil/perfil.component';

const routes: Routes = [
    { path: '',pathMatch: 'full', redirectTo: 'home'},
    { path: 'home', component: HomeComponent},
    { path: 'productos', component: ProductosComponent},
    { path: 'crearproducto', component: CrearproductoComponent},
    { path: 'perfil', component: PerfilComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'home'}   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


