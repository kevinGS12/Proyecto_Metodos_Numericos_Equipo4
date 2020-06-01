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
      pregunta: '1.- Resuelve el siguiente monomio cuadrado usando n=4: x= 1.1, 1.9, 2.4, 4.8 | y= 2.5, 2.7, 3.7, 5.2'
    }
  ]
//Respuesta Linea Recta
  R1LineaR = [
    {
      id: 0,
      respuesta: 'g(x)=... | g(1.1)= 1.426544021 | g(1.9)= 9.032588699 | g(2.4)= 8.411366623 | g(4.8)= 6.229500657 ',
    },
    {
      id: 0,
      respuesta: 'g(x)=... | g(1.3)= 1.426544021 | g(1.9)= 4.032588699 | g(2.4)= 1.411366623 | g(4.8)= 4.229500657',
    },
    {
      id: 0,
      respuesta: 'g(x)=... | g(1.1)= 2.426544021 | g(1.9)= 3.032588699 | g(2.4)= 3.411366623 | g(4.8)= 5.229500657',
    }
  ]


//Data Cudratica
PrCuadratica = [
  {
    id: 0,
    pregunta: '1.- Resuelve el siguiente problema usando el método cuadrático teniendo en cuenta n=4: x= 1.1, 1.9, 2.4, 4.8 | y= 2.5, 2.7, 3.7, 5.2'
  }
]

//Respuesta Cuadratica
R1Cuadratica = [
  {
    id: 0,
    respuesta: 'g(1.1)= 2.395471383 | g(1.9)= 3.046746657 | g(2.4)= 3.442162743 | g(4.8)= 5.215619219',
  },
  {
    id: 0,
    respuesta: 'g(1)= 1.395471383 | g(9)= 4.046746657 | g(2.8)= 0.442162743 | g(4)= 5.215619219',
  },
  {
    id: 0,
    respuesta: 'g(0)= 1.39578542 | g(1.23)= 3.09846557 | g(1.7)= 3.98653243 | g(4.8)= 5.875421219',
  }
]


//Data Cubica
PrCubica = [
  {
    id: 0,
    pregunta: '1.- Resuelve el siguiente problema usando el método cúbico teniendo en cuenta n=4: x= 1.1, 1.9, 2.4, 4.8 | y= 2.5, 2.7, 3.7, 5.2'
  }
]
//Respuesta Cubica
R1Cubica = [
  {
    id: 0,
    respuesta: 'g(1.1)= 2.500000241 | g(1.9)= 2.699999189 | g(2.4)= 3.700000602 | g(4.8)= 5.199999962',
  },
  {
    id: 0,
    respuesta: 'g(x)= 12.500000241 | g(1.9)= 21.699999189 | g(2.4)= 4.700000602 | g(4.8)= 5.187987522',
  },
  {
    id: 0,
    respuesta: 'g(1)= 1.500000241 | g(9)= 5.699999189 | g(2.4)= 3.700000602 | g(4.8)= 5.199999962',
  }
]


//Data Linea con funcion
PrLineaF = [
  {
    id: 0,
    pregunta: '1.- Resuelve el siguiente problema usando linea con función teniendo en cuenta n=4 (UTILIZAR TANGENTE): x= 1.1, 1.9, 2.4, 4.8 | y= 2.5, 2.7, 3.7, 5.2'
  }
]

//Respuesta Linea con funcion
R1LineaF = [
  {
    id: 0,
    respuesta: 'g(3.7)= 4.4324414641 | g(9)= 4.98565705 |g(2.8)= 2.4232208 |g(4.8)= 5.186867446'
  
  },
  {
    id: 0,
    respuesta: 'g(1.1)= 7.46741 | g(2.5)= 8.76565705 |g(4)= 3.724032208 |g(8)= 5.156457446',
  },
  {
    id: 0,
    respuesta: 'g(1.1)= 2.467414641 | g(1.9)= 2.721685705 |g(2.4)= 3.724032208 |g(4.8)= 5.186867446',
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

  Todos(){
    this.value = 'Todos';
  }

}
