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
      id: 0,
      name: 'Método Gráfico',
      pregunta: '1.- ¿Qué valor representa este método?'
    },
    {
      id: 1,
      name: 'Método Gráfico',
      pregunta: '2.- ¿En qué eje se debe observar el cruce de la función?'
    },
    {
      id: 2,
      name: 'Método Gráfico',
      pregunta: '3.- Encuentra las raices de la siguiente función: y=x^3 - 6.5x + 2'
    },
  ]
  //Respuestas Interpolacion 
  R1Grafico = [
    {
      id: 0,
      respuesta: 'f(x)= 0',
    },
    {
      id: 0,
      respuesta: 'f(x)= 2x+2',
    },
    {
      id: 0,
      respuesta: 'f(x)= 1',
    }
  ]
  R2Grafico = [
    {
      id: 1,
      respuesta: 'Eje x',
    },
    {
      id: 1,
      respuesta: 'Eje y',
    }
  ]
  R3Grafico = [
    {
      id: 2,
      respuesta: 'f(x)= 7; -3.5; 9.5',
    },
    {
      id: 2,
      respuesta: 'f(x)= 5; -3.2; 8.3',
    },
    {
      id: 2,
      respuesta: 'f(x)= -5.5; 2; -3',
    }
  ]



  //Data Bisectriz
  PrBisectriz = [
    {
      id: 0,
      name: 'Bisectriz',
      pregunta: '1.- ¿Cuál es el margen de error?'
    },
    {
      id: 1,
      name: 'Newton hacia Bisectriz',
      pregunta: '2.- ¿Qué tipo de búsqueda se utiliza en este método?'
    }
  ]
   //Respuestas Interpolacion 
   R1Bisectriz = [
    {
      id: 0,
      respuesta: '0.01',
    },
    {
      id: 0,
      respuesta: '0.001',
    },
    {
      id: 0,
      respuesta: '0.1',
    }
  ]
  R2Bisectriz = [
    {
      id: 1,
      respuesta: 'Decremental',
    },
    {
      id: 1,
      respuesta: 'Incremental',
    }
  ]
 


  //Data Punto Fijo
  PrPuntoFijo = [
    {
      id: 0,
      name: 'PuntoFijo',
      pregunta: '1.- ¿Cuál es la transformación algebraica equivalente de f(x)=0?'
    },
    {
      id:1,
      name: 'Newton PuntoFijo',
      pregunta: '2.- ¿Qué se tiene que hacer para empezar este problema?'
    },
    {
      id:2,
      name: 'Newton PuntoFijo',
      pregunta: '3.- Encuentra la "xi" y el margen de error de la siguiente ecuación: f(x)= (e^-x) - x. '
    }
  ]
   //Respuestas Punto Fijo 
   R1PuntoFijo = [
    {
      id: 0,
      respuesta: 'f(x)= g(x)+2',
    },
    {
      id: 0,
      respuesta: 'f(x)= g(x)',
    },
    {
      id: 0,
      respuesta: 'f(x)= g(x)*9',
    }
  ]
  R2PuntoFijo = [
    {
      id: 1,
      respuesta: 'Despejar',
    },
    {
      id: 1,
      respuesta: 'Empezar con valores de 0',
    },
    {
      id: 1,
      respuesta: 'Restar para encontrar el margen de error',
    }
  ]
  R3PuntoFijo = [
    {
      id: 2,
      respuesta: 'xi=0.5671407815 ; ε=0.00000693280179',
    },
    {
      id: 2,
      respuesta: 'xi=-0.768036346 ; ε=0.000008941',
    },
    {
      id: 2,
      respuesta: 'xi=7.768036346 ;  ε=0.00008781',
    }
  ]


  //Data Newton-Raphson
  PrNewtonRaphson = [
    {
      id:0,
      name: 'NewtonRaphson',
      pregunta: '1.- ¿Qué tipo de rectas utiliza el método de forma interactiva?'
    },
    {
      id:1,
      name: 'NewtonRaphson',
      pregunta: '2.- ¿Qué valor de “x” inicial debe tener para empezar el problema?'
    },
    {
      id:2,
      name: 'NewtonRaphson',
      pregunta: '3.- Encuentra la "xi" de la siguiente ecuación: 0.8x^2 + x - 3.'
    }
  ]
    //Respuestas Newton-Raphson 
    R1NewtonR = [
      {
        id: 0,
        respuesta: 'Rectas Contangentes',
      },
      {
        id: 0,
        respuesta: 'Rectas Tangentes',
      },
      {
        id: 0,
        respuesta: 'Rectas Secantes',
      }
    ]
    R2NewtonR = [
      {
        id: 1,
        respuesta: '5',
      },
      {
        id: 1,
        respuesta: '3',
      },
      {
        id: 1,
        respuesta: '0',
      }
    ]
    R3NewtonR = [
      {
        id: 0,
        respuesta: 'xi= 1.409852575',
      },
      {
        id: 1,
        respuesta: 'xi= 5.5464852575',
      },
      {
        id: 2,
        respuesta: 'xi= 3.4852885',
      }
    ]


  //Data Falsa Posicion
  PrFalsaPosicion = [
    {
      id:0,
      name: 'FalsaPosicion',
      pregunta: '1.- ¿Qué se utiliza para la estimación de la intersección en el método?'
    },
    {
      id:1,
      name: 'FalsaPosicion',
      pregunta: '2.- ¿Qué elementos en este método son constantes?'
    },
    {
      id:2,
      name: 'FalsaPosicion',
      pregunta: 'Encuentra el margen de error de la siguiente ecuación: f(x)= xe^x - 10.'
    }
  ]
  //Respuestas Falsa Posicion
    R1FalsaP = [
      {
        id: 0,
        respuesta: 'Cuadros Semejantes',
      },
      {
        id: 0,
        respuesta: 'Triángulos Semejantes',
      },
      {
        id: 0,
        respuesta: 'Rectángulos Semejantes',
      }
    ]
    R2FalsaP = [
      {
        id: 1,
        respuesta: 'a',
      },
      {
        id: 1,
        respuesta: 'b',
      },
      {
        id: 1,
        respuesta: 'x',
      }
    ]
    R3FalsaP = [
      {
        id: 0,
        respuesta: 'ε=0.000473',
      },
      {
        id: 1,
        respuesta: 'ε=0.0005328725',
      },
      {
        id: 2,
        respuesta: 'ε=0.000527473',
      }
    ]



    //Data Secante
    PrSecante = [
      {
        id:0,
        name: 'Secante',
        pregunta: '1.- ¿Qué extrapola el método de la función del eje x?'
      },
      {
        id:1,
        name: 'Secante',
        pregunta: '2.- Encuentra la "xi" de la siguiente ecuación: f(x)= 2x^2 - 6x - 3.'
      },
      {
        id:2,
        name: 'Secante',
        pregunta: '3.- Encuentra la "xi" de la siguiente ecuación: f(x)= e^x - x.'
      }
    ]
    //Respuestas Secante 
  R1Secante = [
    {
      id: 0,
      respuesta: 'Tangente',
    },
    {
      id: 0,
      respuesta: 'Coseno',
    },
    {
      id: 0,
      respuesta: 'Seno',
    }
  ]
  R2Secante = [
    {
      id: 0,
      respuesta: 'xi= -0.4364916728',
    },
    {
      id: 1,
      respuesta: 'xi= 0.4364916728',
    },
    {
      id: 2,
      respuesta: 'xi= 0.46846489',
    }
  ]
  R3Secante = [
    {
      id: 0,
      respuesta: 'xi= 0.143306572257',
    },
    {
      id: 1,
      respuesta: 'xi= 0.567143306',
    },
    {
      id: 2,
      respuesta: 'xi= -0.533067257',
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
