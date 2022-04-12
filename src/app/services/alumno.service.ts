import { Injectable } from '@angular/core';
import { Alumno } from '../interfaces/alumnos';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {



  listAlumnos: Alumno[] = [
    { clave: 'jperez', nombre: 'Juan', apellido: 'Pérez', genero: 'M' },
    { clave: 'navila', nombre: 'Nuria', apellido: 'Avila', genero: 'F' },
    { clave: 'mgomez', nombre: 'Martín', apellido: 'Gómez', genero: 'M' },
    { clave: 'ngarcia', nombre: 'Nicolás', apellido: 'García', genero: 'M' },
    { clave: 'vavilez', nombre: 'Verónica', apellido: 'Avilés', genero: 'F' },
    { clave: 'jnavarrete', nombre: 'Joshua', apellido: 'Navarrete', genero: 'M' },
    { clave: 'ralvarado', nombre: 'rocío', apellido: 'Alvarado', genero: 'F' }
  ];

  constructor() { }

  getAlumno() {
    return this.listAlumnos.slice();
  }

  eliminarAlumno(index: number) {
    this.listAlumnos.splice(index, 1);
  };

  agregarAlumno(alumno:Alumno){
    this.listAlumnos.unshift(alumno)
  }

}