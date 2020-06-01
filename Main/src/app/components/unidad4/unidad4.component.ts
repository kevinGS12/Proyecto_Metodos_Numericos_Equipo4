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
//Respuesta Euler
  R1Euler = [
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
  R2Euler = [
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
  R3Euler = [
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

  //Data EulerA
  PrEulerA = [
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
//Respuesta EulerA
  R1EulerA = [
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
  R2EulerA = [
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
  R3EulerA = [
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

//Data EulerD
  PrEulerD = [
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
//Respuesta EulerD
  R1EulerD = [
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
  R2EulerD = [
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
  R3EulerD = [
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

//Data MetodoRK
  PrMetodoRK = [
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
//Respuesta MetodoRK
  R1MetodoRK = [
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
  R2MetodoRK = [
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
  R3MetodoRK = [
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

//Data Orden2
  PrOrden2 = [
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
//Respuesta Orden2
  R1Orden2 = [
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
  R2Orden2 = [
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
  R3Orden2 = [
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

//Data Orden3
  PrOrden3 = [
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
//Respuesta Orden3
  R1Orden3 = [
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
  R2Orden3 = [
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
  R3Orden3 = [
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

//Data Orden4
  PrOrden4 = [
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
//Respuesta Orden4
  R1Orden4 = [
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
  R2Orden4 = [
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
  R3Orden4 = [
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

//Data Simpson1
  PrSimpson1 = [
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
//Respuesta Simpson1
  R1Simpson1 = [
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
  R2Simpson1 = [
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
  R3Simpson1 = [
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
  
//Data Simpson3
PrSimpson3 = [
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
//Respuesta Simpson3
R1Simpson3 = [
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
R2Simpson3 = [
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
R3Simpson3 = [
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

//Data OrdenS
PrOrdenS = [
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
//Respuesta OrdenS
R1OrdenS = [
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
R2OrdenS= [
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
R3OrdenS = [
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


  Euler(){
    this.value = 'Euler'
  }
  EulerA(){
    this.value = 'EulerA'
  }
  EulerD(){
    this.value = 'EulerD'
  }
  MetodoRK(){
    this.value = 'MetodoRK'
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
  Simpson1(){
    this.value = 'Simpson1'
  }
  Simpson3(){
    this.value = 'Simpson3'
  }
  OrdenS(){
    this.value = 'OrdenS'
  }
  Todos(){
    this.value = 'Todos'
  }

}
