import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {
  nombreCurso="HTML";
  descripcionCurso="HTML o Hypertext Markup Language, es un lenguaje de programación creado por Tim Bernes-Lee y conocido en el español como lenguaje de marcado de hipertexto o lenguaje de marcas de hipertexto html se utiliza para hacer páginas web.";
  valorCurso="2000 ARS";

  constructor() { }
  ngOnInit(): void {
  }

}
