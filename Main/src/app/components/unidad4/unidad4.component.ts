import { Component} from '@angular/core';

@Component({
  selector: 'app-unidad4',
  templateUrl: './unidad4.component.html',
  styleUrls: ['./unidad4.component.css']
})
export class RUnidad4Component{

//Data Euler
  PrEuler = [
    {
      id: 0,
      pregunta: '1.- ¿Como se obtiene este método?'
    },
    {
      id: 1,
      pregunta: '2.- Frente a que otro método, este es más exacto: '
    },
    {
      id: 2,
      pregunta: '3.- Encuentra "y´1" y "y´2" de la siguiente ecuación: 3y´ - 5yt + 1 = 0, usando y0= 1.2, h=0.2, y1=2'
    }
  ]
//Respuesta Euler
  R1Euler = [
    {
      id: 0,
      respuesta: 'Derivando Euler hacia adelante',
    },
    {
      id: 0,
      respuesta: 'Integrando el polinomio',
    },
    {
      id: 0,
      respuesta: 'Aplicando la regla trapezoidal para integrar',
    }
  ]
  R2Euler = [
    {
      id: 1,
      respuesta: 'Euler hacia adelante',
    },
    {
      id: 1,
      respuesta: '1/3 de Simpson',
    },
    {
      id: 1,
      respuesta: 'Euler hacia atrás',
    }
  ]
  R3Euler = [
    {
      id: 2,
      respuesta: 'y´1= 1.2 | y´2= 2.08',
    },
    {
      id: 2,
      respuesta: 'y´1= 2.1 | y´2= 3.8',
    },
    {
      id: 2,
      respuesta: 'y´1= 1.7 | y´2= 1.58',
    }
  ]

  
//Data Orden2
  PrOrden2 = [
    {
      id: 0,
      pregunta: '1.- ¿Cuál es el primer paso de iteración?'
    },
    {
      id: 1,
      pregunta: '2.- ¿Cuál es el segundo paso?'
    },
    {
      id: 2,
      pregunta: '3.- Encuentra "y1" y "y2" de la siguiente ecuación: y´ - 2yt + 1 = 0, usando y0= 1, h=0.6'
    }
  ]
//Respuesta Orden2
  R1Orden2 = [
    {
      id: 0,
      respuesta: 'k1= hf(yn*tn)',
    },
    {
      id: 0,
      respuesta: 'k1= hx(yn*n)',
    },
    {
      id: 0,
      respuesta: 'k0= yf(yn*tn)',
    }
  ]
  R2Orden2 = [
    {
      id: 1,
      respuesta: 'k2= hf(yn + k1, tn + h)',
    },
    {
      id: 1,
      respuesta: 'k1= hf(yn*tn)',
    },
    {
      id: 1,
      respuesta: 'k3= hf(yn+tn)',
    }
  ]
  R3Orden2 = [
    {
      id: 2,
      respuesta: 'y1= .1754 | y2= -0.37938081356',
    },
    {
      id: 2,
      respuesta: 'y1= 1.754 | y2= 0.37938081356',
    },
    {
      id: 2,
      respuesta: 'y1= 17.54 | y2= 3.7938081356',
    }
  ]

//Data Orden3
  PrOrden3 = [
    {
      id: 0,
      pregunta: '1.- Resuelve lo siguiente utilizando y0= 1, h=0.25;  y´=2yt+1/y^2'
    },
    {
      id: 1,
      pregunta: '2.- Resuelve lo siguiente utilizando y0= 2,   h=0.2; y´ - 5yt + 1 = 0'
    }
    
  ]
//Respuesta Orden3
  R1Orden3 = [
    {
      id: 0,
      respuesta: 'y1= 1.211723276 | y2 = 1.5461401687',
    },
    {
      id: 0,
      respuesta: 'y1= .211723276 | y2 = 3.5461401687',
    },
    {
      id: 0,
      respuesta: 'y1= 3.211723276 | y2 = .5461401687',
    }
  ]
  R2Orden3 = [
    {
      id: 1,
      respuesta: 'y´= .999333333 | y´= =1.463259556',
    },
    {
      id: 1,
      respuesta: 'y´= 1.999333333 | y´= =2.463259556',
    },
    {
      id: 1,
      respuesta: 'y´= 3.999333333 | y´= =2.463259556',
    }
  ]


//Data Orden4
  PrOrden4 = [
    {
      id: 0,
      pregunta: '1.- Resolver problema por 1/3 Simpson (y0= 3; y´0= 2; h= 0.2): y´= y´Sen(2t) + ycos(t) = 0'
    },
    {
      id: 1,
      pregunta: ' Resolver problema por 3/8 Simpson (y0= 3; y´0= 2; h= 0.2): y´= y´Sen(2t) + ycos(t) = 0'
    }
  ]
//Respuesta Orden4
  R1Orden4 = [
    {
      id: 0,
      respuesta: 'y1= 1.82198228851 | y2= 2.7687944',
    },
    {
      id: 0,
      respuesta: 'y1= 1.82198228851 | y2= 1.76085484781',
    },
    {
      id: 0,
      respuesta: 'y1= .3083333 | y2= 8.7687944',
    }
  ]
  R2Orden4 = [
    {
      id: 1,
      respuesta: 'y1= 2.3083333 | y2= 2.7687944',
    },
    {
      id: 1,
      respuesta: 'y1= 1.3083333 | y2= 3.7687944',
    },
    {
      id: 1,
      respuesta: 'y1= .3083333 | y2= 8.7687944',
    }
  ]
  

//Data OrdenS
PrOrdenS = [
  {
    id: 0,
    pregunta: '1.- Resolver por Orden Superior, usando y0=1; y´0=2; h=0.3 el siguiente problema: 2y´´ - 2y´tg(t) + yctg(t) = 0 '
  },
  {
    id: 1,
    pregunta: '2.- Resolver por Orden Superior, usando y0=1.1; y´0=1.2; h=0.2 el siguiente problema: 2y´´ - 4y´t - 2y = 0'
  }
]

//Respuesta OrdenS
R1OrdenS = [
  {
    id: 0,
    respuesta: 'y1= 1.76 | y2= 2.15',
  },
  {
    id: 0,
    respuesta: 'y1= .6 | y2= 1.018819899',
  },
  {
    id: 0,
    respuesta: 'y1= 1.6 | y2= 2.018819899',
  }
]
R2OrdenS= [
  {
    id: 1,
    respuesta: 'y´1= 1.456 | y´1= .543146944',
  },
  {
    id: 1,
    respuesta: 'y´1= 1.318 | y´1= 1.543146944',
  },
  {
    id: 1,
    respuesta: 'y´1= .318 | y´1= 1.10654651',
  }
]

  value: string;
  constructor() { }


  Euler(){
    this.value = 'Euler'
  }
  
  Orden2(){
    this.value = 'Orden2'
  }
  Orden3(){
    this.value = 'Orden3'
  }
  Orden4(){
    this.value = 'Orden4'
  }
  
  OrdenS(){
    this.value = 'OrdenS'
  }
  Todos(){
    this.value = 'Todos'
  }

}
