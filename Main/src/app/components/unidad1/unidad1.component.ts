import { Component } from '@angular/core';

@Component({
  selector: 'app-unidad1',
  templateUrl: './unidad1.component.html',
  styleUrls: ['./unidad1.component.css']
})

export class Unidad1Component{
  //Data Interpolacion
  PrInterpolacion = [
    {
      name: 'Interpolacion',
      pregunta: 'Pregunta sobre Interpolacion',
      respuesta: 'test1'
    },
    {
      name: 'Interpolacion',
      pregunta: 'Pregunta sobre Interpolacion',
      respuesta: 'test2'
    },
    {
      name: 'Interpolacion',
      pregunta: 'Pregunta sobre Interpolacion',
      respuesta: 'test3'
    },
  ]
  //Data Newton hacia adelante
  PrNewtonA = [
    {
      name: 'Newton hacia adelante',
      pregunta: 'Pregunta sobre Newton hacia adelante'
    },
    {
      name: 'Newton hacia adelante',
      pregunta: 'Pregunta sobre Newton hacia adelante'
    },
    {
      name: 'Newton hacia adelante',
      pregunta: 'Pregunta sobre Newton hacia adelante'
    }
  ]
  //Data Newton hacia atras
  PrNewtonD = [
    {
      name: 'Newton hacia atras',
      pregunta: 'Pregunta sobre Newton hacia atras'
    },
    {
      name: 'Newton hacia atras',
      pregunta: 'Pregunta sobre Newton hacia atras'
    },
    {
      name: 'Newton hacia atras',
      pregunta: 'Pregunta sobre Newton hacia atras'
    }
  ]
  //Data Newton con diferencias divididas
  PrNewtonDD = [
    {
      name: 'Newton con diferencias divididas',
      pregunta: 'Pregunta sobre Newton con diferencias divididas'
    },
    {
      name: 'Newton con diferencias divididas',
      pregunta: 'Pregunta sobre Newton con diferencias divididas'
    },
    {
      name: 'Newton con diferencias divididas',
      pregunta: 'Pregunta sobre Newton con diferencias divididas'
    }
  ]
  //Data Lagrange
  PrLagrange = [
    {
      name: 'Lagrange',
      pregunta: 'Pregunta sobre Lagrange'
    },
    {
      name: 'Lagrange',
      pregunta: 'Pregunta sobre Lagrange'
    },
    {
      name: 'Lagrange',
      pregunta: 'Pregunta sobre Lagrange'
    }
  ]

  value: string;

  Interpolacion(){
    this.value = 'Interpolacion';
  }

  NewtonA(){
    this.value = 'NewtonA';
  }

  NewtonD(){
    this.value = 'NewtonD';
  }

  NewtonDD(){
    this.value = 'NewtonDD';
  }

  Lagrange(){
    this.value = 'Lagrange';
  }
  
  Todos(){
    this.value = 'Todos';
  }
  constructor() {}
}
