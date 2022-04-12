import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Alumno } from 'src/app/interfaces/alumnos';
import { AlumnoService } from 'src/app/services/alumno.service';

@Component({
  selector: 'app-crear-alumnos',
  templateUrl: './crear-alumnos.component.html',
  styleUrls: ['./crear-alumnos.component.css']
})
export class CrearAlumnosComponent implements OnInit {
  form: FormGroup;

  genero: any[] = ['M', 'F']

  constructor(private fb: FormBuilder, private _alumnoService: AlumnoService, private router: Router, private _snackBar: MatSnackBar) {
    this.form = this.fb.group({
      clave: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      genero: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  agregarAlumno() {
    //console.log(this.form);

    const alumno: Alumno = {
      clave: this.form.value.clave,
      nombre: this.form.value.nombre,
      apellido: this.form.value.apellido,
      genero: this.form.value.genero,
    }

    //console.log(alumno);

    this._alumnoService.agregarAlumno(alumno);

    this.router.navigate(['/dashboard/alumnos']);

    this._snackBar.open('Alumno agregado', '',{
      duration: 1500,
      horizontalPosition:'center',
      verticalPosition:'bottom'
    });

  }

}