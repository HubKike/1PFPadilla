import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { Alumno } from 'src/app/interfaces/alumnos';
import { AlumnoService } from 'src/app/services/alumno.service';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {

  listAlumnos: Alumno[]= [];
  
  displayedColumns: string[] = ['clave', 'nombre', 'apellido', 'genero', 'edicion'];
  dataSource!:MatTableDataSource<any>;
  /* dataSource = new MatTableDataSource(this.listAlumnos); */

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _alumnoService:AlumnoService, private _snackBar: MatSnackBar){}

  ngOnInit(): void {
    this.cargarAlumnos();
  }

  cargarAlumnos(){
    this.listAlumnos = this._alumnoService.getAlumno();
    this.dataSource = new MatTableDataSource(this.listAlumnos);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  eliminarAlumno(index: number){
    console.log(index);
    this._alumnoService.eliminarAlumno(index);
    this.cargarAlumnos();

    this._snackBar.open('Alumno eliminado', '',{
      duration: 1500,
      horizontalPosition:'center',
      verticalPosition:'bottom'
    });
  }

}