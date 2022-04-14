import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const filtro = [];
    for(const producto of value){
      if(
         producto.Nombre.indexOf(arg) > -1 ||
         producto.Caracteristica.indexOf(arg) > -1 ||
         producto.Fecha.indexOf(arg) > -1 ||
         producto.Correo.indexOf(arg) > -1 ||
         producto.Pais.indexOf(arg) > -1 ||
         producto.Precio.indexOf(arg) > -1 ||
         producto.Disponible.indexOf(arg) > -1 ||
         producto.Vendidas.indexOf(arg) > -1
      ){
        filtro.push(producto);
      };
    };
    return filtro;
  }

}
