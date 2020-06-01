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
      id:0,
      name: 'ReglaTapezoidal',
      pregunta: '1.- ¿En que caso corresponde el uso de este método?'     
    },
    {
      id: 1,
      name: 'ReglaTapezoidal',
      pregunta: '2.- ¿Cuál es la fórmula de h?'
     
    },
    {
      id:2,
      name: 'ReglaTapezoidal',
      pregunta: '3.- Resuelve la siguiente integral con el límite superior = 1 y el inferior = 0 con un valor de n = 5: ∫ [Sen(2x)+3x^3]dx  '
    },
  ]
      //Respuestas Regla Trapezoidal 
      R1ReglaT = [
        {
          id: 0,
          respuesta: 'Cuando las integrales son impropias',
        },
        {
          id: 0,
          respuesta: 'Cuando n es par',
        },
        {
          id: 0,
          respuesta: 'Cuando a es positivo y b negativo',
        }
      ]
      R2ReglaT = [
        {
          id: 1,
          respuesta: 'h= a-b/n',
        },
        {
          id: 1,
          respuesta: 'h= b-a'
        },
        {
          id: 1,
          respuesta: 'h= b-a/n',
        }
      ]
      R3ReglaT = [
        {
          id: 2,
          respuesta: '-1.24939082702',
        },
        {
          id: 2,
          respuesta: '1.841684615',
        },
        {
          id: 2,
          respuesta: '.479399110',
        }
      ]

        //Data Regla 1/3 Simpson
  PrSimpson1 = [
    {
      id:0,
      name: 'Regla 1/3 Simpson',
      pregunta: '1.- ¿De que resulta esta regla?'
    },
    {
      id:1,
      name: 'Newton hacia Regla 1/3 Simpson',
      pregunta: '2.- ¿En qué consiste?'
    },
    {
      id:2,
      name: 'Newton hacia Regla 1/3 Simpson',
      pregunta: '3.- Resuelve la siguiente integral con el límite superior = 1 y el inferior = 0 con un valor de n = 4: ∫ [(1 - x^2)]dx '
    }
  ]
        //Respuestas Simpson 1/3
        R1Simpson1 = [
          {
            id: 0,
            respuesta: 'De una integración de un polinomio de interpolación de 2do grado',
          },
          {
            id: 0,
            respuesta: 'De un polinomio',
          },
          {
            id: 0,
            respuesta: 'De la regla trapezoidal',
          }
        ]
        R2Simpson1 = [
          {
            id: 1,
            respuesta: 'En unir puntos',
          },
          {
            id: 1,
            respuesta: 'En hacer uso de la tabla de Newton-Cotes'
          },
          {
            id: 1,
            respuesta: 'En considerar el área bajo una parábola que une puntos',
          }
        ]
        R3Simpson1 = [
          {
            id: 2,
            respuesta: '-0.666666667',
          },
          {
            id: 2,
            respuesta: '1.841684615',
          },
          {
            id: 2,
            respuesta: '.479399110',
          }
        ]

  //Data Regla 3/8 Simpson
  PrSimpson3 = [
    {
      id:0,
      name: 'Regla 3/8 Simpson',
      pregunta: '1.- ¿Cuando se aplica esta regla? '
    },
    {
      id:1,
      name: 'Newton hacia Regla 3/8 Simpson',
      pregunta: '2.- ¿Cuál es la diferencia de 3/8 a 1/3 de Simpson?'
    },
    {
      id:2,
      name: 'Newton hacia Regla 3/8 Simpson',
      pregunta: '3.- Resuelve la siguiente integral con el límite superior = 1 y el inferior = 0 con un valor de n = 3: ∫ [(x^3)(e^x)dx '
    }
  ]
  //Respuestas Simpson 3/8
  R1Simpson3 = [
            {
              id: 0,
              respuesta: 'Cuando el numero de intervalos es muy grande',
            },
            {
              id: 0,
              respuesta: 'Cuando se quiere ser más preciso',
            },
            {
              id: 0,
              respuesta: 'Cuando es un numero de intervalos en múltiplos de tres',
            }
   ]
   R2Simpson3 = [
            {
              id: 1,
              respuesta: 'Es más complicada',
            },
            {
              id: 1,
              respuesta: 'Tiene valores más grandes'
            },
            {
              id: 1,
              respuesta: 'Es más exacta',
            }
          ]
  R3Simpson3 = [
            {
              id: 2,
              respuesta: '-0.666666667',
            },
            {
              id: 2,
              respuesta: '-0.575583627',
            },
            {
              id: 2,
              respuesta: '0.705',
            }
          ]
  
  //Data Newton-Cotes
  PrNewtonC = [
    {
      id:0,
      name: 'Newton-Cotes',
      pregunta: '1.- ¿Que otros métodos son casos de Newton-Cotes?'
    },
    {
      id:1,
      name: 'Newton Newton-Cotes',
      pregunta: '2.- ¿Cuál es su ventaja ante los otros métodos?'
    },
    {
      id:2,
      name: 'Newton Newton-Cotes',
      pregunta: '3.- Resuelve la siguiente integral con el límite superior = 1 y el inferior = 0 con un valor de n = 4: ∫ [1-(x^2)]dx (ABIERTAS) '
    }
  ]
    //Respuestas Newton-Cotes
  R1NewtonC = [
      {
        id: 0,
        respuesta: 'Bisectriz',
      },
      {
        id: 0,
        respuesta: 'Regla Trapezoidal y Runge-Kutta',
      },
      {
        id: 0,
        respuesta: 'Regla Trapezoidal y las dos reglas de Simpson',
      }
]
R2NewtonC = [
      {
        id: 1,
        respuesta: 'Su método es preciso',
      },
      {
        id: 1,
        respuesta: 'Utilizan puntos con igual operación. Dispone de fórmulas abiertas y cerradas'
      },
      {
        id: 1,
        respuesta: 'Las formulas de orden superior no son precisas.',
      }
    ]
R3NewtonC = [
      {
        id: 2,
        respuesta: '-0.66666666',
      },
      {
        id: 2,
        respuesta: '-0.575583627',
      },
      {
        id: 2,
        respuesta: '0.705',
      }
    ]

    
  value: string;

    // Funciones

    ReglaTrapezoidal(){
    this.value = 'ReglaTrapezoidal';
  }

  Simpson1(){
    this.value = 'Simpson1'
  }

  Simpson3(){
    this.value = 'Simpson3';
  }

  NewtonC(){
    this.value = 'NewtonC';
  }


  

  
  Todos(){
    this.value = 'Todos';
  }
  constructor() {}
}
