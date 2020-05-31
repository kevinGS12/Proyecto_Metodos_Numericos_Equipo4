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
      id: 0,
      name: 'Interpolacion',
      pregunta: '1.- ¿De qué modelo de integración se deduce la Interpolación Lineal?'
    },
    {
      id: 1,
      name: 'Interpolacion',
      pregunta: '2.- ¿Que aproximación da este método a la primera derivada?'
    },
    {
      id: 2,
      name: 'Interpolacion',
      pregunta: 'Estimar Ln 4 entre Ln 3 y Ln 5'
    },
  ]
  //Respuestas Interpolacion 
  R1Interpolacion = [
    {
      id: 0,
      respuesta: 'Regla del rectángulo',
    },
    {
      id: 1,
      respuesta: 'Regla del circulo',
    },
    {
      id: 2,
      respuesta: 'Regla del trapecio',
    }
  ]
  R2Interpolacion = [
    {
      id: 0,
      respuesta: 'Grado',
    },
    {
      id: 1,
      respuesta: 'Gradiante',
    },
    {
      id: 2,
      respuesta: 'Radian',
    }
  ]
  R3Interpolacion = [
    {
      id: 0,
      respuesta: 'g(x)= 1.354025101  ε= 0.03226926',
    },
    {
      id: 1,
      respuesta: 'g(x)= 0.354025101  ε= 1.03226926',
    },
    {
      id: 2,
      respuesta: 'g(x)= 0.354025101  ε= 0.03226926',
    }
  ]
  //Data Newton hacia adelante
  PrNewtonA = [
    {
      id: 0,
      name: 'Newton hacia adelante',
      pregunta: '1.- ¿Qué se necesita para evaluar una formula por Newton hacia Adelante?'
    },
    {
      id: 1,
      name: 'Newton hacia adelante',
      pregunta: '¿De qué se conforma la segunda columna del método?'
    },
    {
      id: 2,
      name: 'Newton hacia adelante',
      pregunta: 'Calcular la g(x) para un valor de x=3.75 con los siguientes datos [x1= 3, f(x)= 3.03], [x2= 3.5, f(x)= 3.48], [x3= 4, f(x)= 4.08], [x4= 4.5, f(x)= 4.87]'
    }
  ]
  //Respuestas Newton hacia adelante
  R1NewtonA = [
    {
      id: 0,
      respuesta: 'Tablas de coeficientes hacia delante',
    },
    {
      id: 0,
      respuesta: 'Coeficientes binomiales',
    },
    {
      id: 0,
      respuesta: 'ambas',
    }
  ]
  R2NewtonA = [
    {
      id: 0,
      respuesta: 'Ordenadas de los datos',
    },
    {
      id: 0,
      respuesta: 'diferencias de primer orden',
    },
    {
      id: 0,
      respuesta: 'Índice de los datos',
    }
  ]
  R3NewtonA = [
    {
      id: 0,
      respuesta: 'g(x)= 3.75875',
    },
    {
      id: 0,
      respuesta: 'g(x)= 4.45805',
    },
    {
      id: 0,
      respuesta: 'g(x)= 2.75675',
    }
  ]
  //Data Newton hacia atras
  PrNewtonD = [
    {
      id: 0,
      name: 'Newton hacia atras',
      pregunta: '1.- ¿Qué signo tomara el valor de “s”?'
    },
    {
      id: 1,
      name: 'Newton hacia atras',
      pregunta: '2.- Para aplicar el método, ¿se necesita la “h” uniforme?'
    },
    {
      id: 2,
      name: 'Newton hacia atras',
      pregunta: 'Calcular la g(x) para un valor de x=2.4 con los siguientes datos [x1= 2.2, f(x)= 2.54], [x2= 2.5, f(x)= 2.82], [x3= 2.8, f(x)= 3.21]'
    }
  ]

  //Respuestas Newton hacia atras
  R1NewtonD = [
    {
      id: 0,
      respuesta: 'Positivo',
    },
    {
      id: 0,
      respuesta: 'Negativo',
    }
  ]
  R2NewtonD = [
    {
      id: 0,
      respuesta: 'Si',
    },
    {
      id: 0,
      respuesta: 'No',
    }
  ]
  R3NewtonD = [
    {
      id: 0,
      respuesta: 'g(x)= 0.7143244',
    },
    {
      id: 0,
      respuesta: 'g(x)= 2.71444444',
    },
    {
      id: 0,
      respuesta: 'g(x)= 1.563278',
    }
  ]
  //Data Newton con diferencias divididas
  PrNewtonDD = [
    {
      id: 0,
      name: 'Newton con diferencias divididas',
      pregunta: '1.- Margen de error permitido en este método'
    },
    {
      id: 1,
      name: 'Newton con diferencias divididas',
      pregunta: '2.- ¿Cuándo se aplica este método?'
    },
    {
      id: 2,
      name: 'Newton con diferencias divididas',
      pregunta: '3.- Calcular la g(x) para un valor de x=3.5 con los siguientes datos [x1= 4.4, f(x)= -0.68], [x2= 3.7, f(x)= -1.59], [x3= 3.1, f(x)= -1.82]'
    }
  ]
  //Respuestas Newton con diferenias divididas
  R1NewtonDD = [
    {
      id: 0,
      respuesta: '4 diez milésimas',
    },
    {
      id: 0,
      respuesta: '1 diez milésimas',
    },
    {
      id: 0,
      respuesta: '2 diez milésimas',
    }
  ]
  R2NewtonDD = [
    {
      id: 1,
      respuesta: 'Cuando los intervalos son uniformes',
    },
    {
      id: 1,
      respuesta: 'Cuando los intervalos no son uniformes',
    }
  ]
  R3NewtonDD = [
    {
      id: 2,
      respuesta: 'g(x)= 0.7384244',
    },
    {
      id: 2,
      respuesta: 'g(x)= -1.723076923',
    },
    {
      id: 2,
      respuesta: 'g(x)= 4.58740171',
    }
  ]
  //Data Lagrange
  PrLagrange = [
    {
      id: 0,
      name: 'Lagrange',
      pregunta: '1.- ¿En qué intervalos se puede aplicar este método?'
    },
    {
      id: 1,
      name: 'Lagrange',
      pregunta: '2.- ¿Cuál es una desventaja de este método?'
    },
    {
      id: 2,
      name: 'Lagrange',
      pregunta: '3.- Calcular la g(x) para un valor de x=7 con los siguientes datos [x1= 7.3, f(x)= -0.28], [x2= 6.5, f(x)= -1.35], [x3=6.1, f(x)= -1.96]'
    }
  ]
  R1Lagrange = [
    {
      id: 0,
      respuesta: 'Cuando los intervalos son uniformes',
    },
    {
      id: 0,
      respuesta: 'Cuando los intervalos son no uniformes',
    },
    {
      id: 0,
      respuesta: 'ambas',
    }
  ]
  R2Lagrange = [
    {
      id: 1,
      respuesta: 'La evaluación de error no es facil',
    },
    {
      id: 1,
      respuesta: 'Cuando el numero de datos incrementa se puede utilizar los datos recolectados',
    },
    {
      id: 1,
      respuesta: 'La cantidad de datos de interppolacion no es grande',
    }
  ]
  R3Lagrange = [
    {
      id: 2,
      respuesta: 'g(x)= -0.6578125',
    },
    {
      id: 2,
      respuesta: 'g(x)= -0.723076923',
    },
    {
      id: 2,
      respuesta: 'g(x)= 2.246719826',
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
