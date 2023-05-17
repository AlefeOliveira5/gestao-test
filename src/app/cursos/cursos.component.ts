import { Component } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent {
  nomePortal: string;

  cursos: string[] = ['Java' , 'Ext js' , 'Angular']

  constructor(){
    this.nomePortal = 'http://loiane.training'

  }
}