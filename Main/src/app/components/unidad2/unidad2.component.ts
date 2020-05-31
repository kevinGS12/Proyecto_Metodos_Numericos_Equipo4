import { Component } from '@angular/core';

@Component({
  selector: 'app-unidad2',
  templateUrl: './unidad2.component.html',
  styleUrls: ['./unidad2.component.css']
})

export class Unidad2Component{
  //Data Método Gráfico
  PrGrafico = [
    {
      name: 'Método Gráfico',
      pregunta: 'Pregunta sobre Método Gráfico',
      respuesta: 'test1'
    },
    {
      name: 'Método Gráfico',
      pregunta: 'Pregunta sobre Método Gráfico',
      respuesta: 'test2'
    },
    {
      name: 'Método Gráfico',
      pregunta: 'Pregunta sobre Método Gráfico',
      respuesta: 'test3'
    },
  ]
  //Data Bisectriz
  PrBisectriz = [
    {
      name: 'Bisectriz',
      pregunta: 'Pregunta sobre Bisectriz'
    },
    {
      name: 'Newton hacia Bisectriz',
      pregunta: 'Pregunta sobre Bisectriz'
    },
    {
      name: 'Newton hacia Bisectriz',
      pregunta: 'Pregunta sobre Bisectriz'
    }
  ]
  //Data Punto Fijo
  PrPuntoFijo = [
    {
      name: 'PuntoFijo',
      pregunta: 'Pregunta sobre PuntoFijo'
    },
    {
      name: 'Newton PuntoFijo',
      pregunta: 'Pregunta sobre PuntoFijo'
    },
    {
      name: 'Newton PuntoFijo',
      pregunta: 'Pregunta sobre PuntoFijo'
    }
  ]
  //Data Newton-Raphson
  PrNewtonRaphson = [
    {
      name: 'NewtonRaphson',
      pregunta: 'Pregunta sobre NewtonRaphson'
    },
    {
      name: 'NewtonRaphson',
      pregunta: 'Pregunta sobre NewtonRaphson'
    },
    {
      name: 'NewtonRaphson',
      pregunta: 'Pregunta sobre NewtonRaphson'
    }
  ]
  //Data Falsa Posicion
  PrFalsaPosicion = [
    {
      name: 'FalsaPosicion',
      pregunta: 'Pregunta sobre FalsaPosicion'
    },
    {
      name: 'FalsaPosicion',
      pregunta: 'Pregunta sobre FalsaPosicion'
    },
    {
      name: 'FalsaPosicion',
      pregunta: 'Pregunta sobre FalsaPosicion'
    }
  ]
    //Data Secante
    PrSecante = [
      {
        name: 'Secante',
        pregunta: 'Pregunta sobre Secante'
      },
      {
        name: 'Secante',
        pregunta: 'Pregunta sobre Secante'
      },
      {
        name: 'Secante',
        pregunta: 'Pregunta sobre Secante'
      }
    ]

  value: string;

  Grafico(){
    this.value = 'Grafico';
  }

  Bisectriz(){
    this.value = 'Bisectriz';
  }

  PuntoFijo(){
    this.value = 'PuntoFijo';
  }

  NewtonRaphson(){
    this.value = 'NewtonRaphson';
  }

  FalsaPosicion(){
    this.value = 'FalsaPosicion';
  }

  Secante(){
    this.value = 'Secante';
  }
  
  Todos(){
    this.value = 'Todos';
  }
  constructor() {}
}
