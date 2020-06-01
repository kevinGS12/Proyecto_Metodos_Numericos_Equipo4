import { Component} from '@angular/core';

@Component({
  selector: 'app-unidad2-pt2',
  templateUrl: './unidad2-pt2.component.html',
  styleUrls: ['./unidad2-pt2.component.css']
})
export class Unidad2Pt2Component {
//Data Linea Recta
  PrLineaR = [
    {
      id: 0,
      pregunta: ''
    },
    {
      id: 1,
      pregunta: ''
    },
    {
      id: 2,
      pregunta: ''
    }
  ]

//Data Cudratica
PrCuadratica = [
  {
    id: 0,
    pregunta: ''
  },
  {
    id: 1,
    pregunta: ''
  },
  {
    id: 2,
    pregunta: ''
  }
]

//Data Cubica
PrCubica = [
  {
    id: 0,
    pregunta: ''
  },
  {
    id: 1,
    pregunta: ''
  },
  {
    id: 2,
    pregunta: ''
  }
]

//Data Linea con funcion
PrLineaF = [
  {
    id: 0,
    pregunta: ''
  },
  {
    id: 1,
    pregunta: ''
  },
  {
    id: 2,
    pregunta: ''
  }
]

//Data Cuadratica con funcion
PrCuadraticaF = [
  {
    id: 0,
    pregunta: ''
  },
  {
    id: 1,
    pregunta: ''
  },
  {
    id: 2,
    pregunta: ''
  }
]

  
  value: string;
  constructor() { }

  LineaR() {
     this.value = 'LineaR'
  }
  Cuadratica(){
    this.value = 'Cuadratica'
  }
  Cubica(){
    this.value = 'Cubica'
  }
  LineaF(){
    this.value = 'LineaF'
  }
  CuadraticaF(){
    this.value = 'CuadraticaF'
  }

}
