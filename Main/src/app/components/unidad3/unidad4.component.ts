import { Component } from '@angular/core';

@Component({
  selector: 'app-unidad4',
  templateUrl: './unidad4.component.html',
  styleUrls: ['./unidad4.component.css']
})

export class Unidad4Component{
  //Data Regla Tapezoidal
  PrReglaTrapezoidal = [
    {
      name: 'ReglaTapezoidal',
      pregunta: 'Pregunta sobreReglaTrapezoidal',
      respuesta: 'test1'
    },
    {
      name: 'ReglaTapezoidal',
      pregunta: 'Pregunta sobre ReglaTrapezoidal',
      respuesta: 'test2'
    },
    {
      name: 'ReglaTapezoidal',
      pregunta: 'Pregunta sobre ReglaTrapezoidal',
      respuesta: 'test3'
    },
  ]
  //Data Regla 3/8 Simpson
  PrSimpson = [
    {
      name: 'Regla 3/8 Simpson',
      pregunta: 'Pregunta sobre Regla 3/8 Simpson'
    },
    {
      name: 'Newton hacia Regla 3/8 Simpson',
      pregunta: 'Pregunta sobre Regla 3/8 Simpson'
    },
    {
      name: 'Newton hacia Regla 3/8 Simpson',
      pregunta: 'Pregunta sobre Regla 3/8 Simpson'
    }
  ]
  //Data Newton-Cotes
  PrNewtonC = [
    {
      name: 'Newton-Cotes',
      pregunta: 'Pregunta sobre Newton-Cotes'
    },
    {
      name: 'Newton Newton-Cotes',
      pregunta: 'Pregunta sobre Newton-Cotes'
    },
    {
      name: 'Newton Newton-Cotes',
      pregunta: 'Pregunta sobre Newton-Cotes'
    }
  ]
  //Data Ecuaciones diferenciales ordinaria
  PrEcuacionesD = [
    {
      name: 'EcuacionesD',
      pregunta: 'Pregunta sobre EcuacionesD'
    },
    {
      name: 'EcuacionesD',
      pregunta: 'Pregunta sobre EcuacionesD'
    },
    {
      name: 'EcuacionesD',
      pregunta: 'Pregunta sobre EcuacionesD'
    }
  ]
  //Data Método Runge-Kutten
  PrRungeK = [
    {
      name: 'RungeKutten',
      pregunta: 'Pregunta sobre RugenKutten'
    },
    {
      name: 'RungeKutten',
      pregunta: 'Pregunta sobre RugenKutten'
    },
    {
      name: 'RungeKutten',
      pregunta: 'Pregunta sobre RugenKutten'
    }
  ]
    
  value: string;

    // Funciones

    ReglaTrapezoidal(){
    this.value = 'ReglaTrapezoidal';
  }

  Simpson(){
    this.value = 'Simpson';
  }

  NewtonC(){
    this.value = 'NewtonC';
  }

  EcuacionesD(){
    this.value = 'EcuacionesD';
  }

  RungeK(){
    this.value = 'RungeK';
  }

  
  Todos(){
    this.value = 'Todos';
  }
  constructor() {}
}
