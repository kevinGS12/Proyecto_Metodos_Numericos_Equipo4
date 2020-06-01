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
//Respuesta Linea Recta
  R1LineaR = [
    {
      id: 0,
      respuesta: '',
    },
    {
      id: 0,
      respuesta: '',
    },
    {
      id: 0,
      respuesta: '',
    }
  ]
  R2LineaR = [
    {
      id: 1,
      respuesta: '',
    },
    {
      id: 1,
      respuesta: '',
    },
    {
      id: 1,
      respuesta: '',
    }
  ]
  R3LineaR = [
    {
      id: 2,
      respuesta: '',
    },
    {
      id: 2,
      respuesta: '',
    },
    {
      id: 2,
      respuesta: '',
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

//Respuesta Cuadratica
R1Cuadratica = [
  {
    id: 0,
    respuesta: '',
  },
  {
    id: 0,
    respuesta: '',
  },
  {
    id: 0,
    respuesta: '',
  }
]
R2Cuadratica  = [
  {
    id: 1,
    respuesta: '',
  },
  {
    id: 1,
    respuesta: '',
  },
  {
    id: 1,
    respuesta: '',
  }
]
R3Cuadratica  = [
  {
    id: 2,
    respuesta: '',
  },
  {
    id: 2,
    respuesta: '',
  },
  {
    id: 2,
    respuesta: '',
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


//Respuesta Cubica
R1Cubica = [
  {
    id: 0,
    respuesta: '',
  },
  {
    id: 0,
    respuesta: '',
  },
  {
    id: 0,
    respuesta: '',
  }
]
R2Cubica = [
  {
    id: 1,
    respuesta: '',
  },
  {
    id: 1,
    respuesta: '',
  },
  {
    id: 1,
    respuesta: '',
  }
]
R3Cubica = [
  {
    id: 2,
    respuesta: '',
  },
  {
    id: 2,
    respuesta: '',
  },
  {
    id: 2,
    respuesta: '',
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

//Respuesta Linea con funcion
R1LineaF = [
  {
    id: 0,
    respuesta: '',
  },
  {
    id: 0,
    respuesta: '',
  },
  {
    id: 0,
    respuesta: '',
  }
]
R2LineaF = [
  {
    id: 1,
    respuesta: '',
  },
  {
    id: 1,
    respuesta: '',
  },
  {
    id: 1,
    respuesta: '',
  }
]
R3LineaF = [
  {
    id: 2,
    respuesta: '',
  },
  {
    id: 2,
    respuesta: '',
  },
  {
    id: 2,
    respuesta: '',
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

//Respuesta Cuadratica con Funcion
R1CuadraticaF = [
  {
    id: 0,
    respuesta: '',
  },
  {
    id: 0,
    respuesta: '',
  },
  {
    id: 0,
    respuesta: '',
  }
]
R2CuadraticaF  = [
  {
    id: 1,
    respuesta: '',
  },
  {
    id: 1,
    respuesta: '',
  },
  {
    id: 1,
    respuesta: '',
  }
]
R3CuadraticaF = [
  {
    id: 2,
    respuesta: '',
  },
  {
    id: 2,
    respuesta: '',
  },
  {
    id: 2,
    respuesta: '',
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
  Todos(){
    this.value = 'Todos';
  }

}
