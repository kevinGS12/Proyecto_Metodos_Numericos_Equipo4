import { Component} from '@angular/core';

@Component({
  selector: 'app-unidad2',
  templateUrl: './unidad2.component.html',
  styleUrls: ['./unidad2.component.css']
})

export class Unidad3Component{
    //Data Montante
    PrMontante = [
      {
        id:0,
        name: 'Montante',
        pregunta: '1.- ¿Se puede considerar como elemento el pivote un valor igual a cero?'
      },
      {
        id:1,
        name: 'Montante',
        pregunta: '2.- Son reglas que seguir para construir la nueva matriz'
      },
      {
        id:2,
        name: 'Montante',
        pregunta: '3.- Resuelve la siguiente matríz :  2x + 5y - 2z = 1 | -x + 2y + 3z = 2 | 3x - 3y + 2z = 3 '
      },
    ]
      //Respuestas Montante 
  R1Montante = [
    {
      id: 0,
      respuesta: 'Si',
    },
    {
      id: 0,
      respuesta: 'No',
    }
  ]
  R2Montante = [
    {
      id: 1,
      respuesta: 'La fila se transfiere idéntica, las columnas quedarán formadas por ceros excepto la diagonal principal.',
    },
    {
      id: 1,
      respuesta: 'Cuando se tranfiera la fila se pondrán 1´s en la columna del pivote a tomar.'
    },
    {
      id: 1,
      respuesta: 'Siempre se dividirá las matrices por el pivote inicial.',
    }
  ]
  R3Montante = [
    {
      id: 2,
      respuesta: 'x= 4 | y= 46/87 | z= -46/23',
    },
    {
      id: 2,
      respuesta: 'x= 62/87 | y= 19/87 | z= 66/87',
    },
    {
      id: 2,
      respuesta: 'x= 2/74 | y= 1/7 | z= 6/8',
    }
  ]

    //Data Gauss-Jordan
    PrGaussJordan = [
      {
        id:0,
        name: 'Gauss-Jordan',
        pregunta: '1.- ¿Qué matriz se debe formar al final del problema de lado de las variables?'
      },
      {
        id:1,
        name: 'Gauss-Jordan',
        pregunta: '2.- ¿De qué método se deriva el método usado?'
      },
      {
        id:2,
        name: 'Gauss-Jordan',
        pregunta: '3.- Resuelve la siguiente matríz: 3x - 2y + 2z = 2 | 4x + 2y + 2z = 0 | 3x - 3y + 3z = 12'
      }
    ]
      //Respuestas Gauss-Jordan
  R1Gauss = [
    {
      id: 0,
      respuesta: 'Una matríz con ceros',
    },
    {
      id: 0,
      respuesta: 'Una matríz identidad',
    },
    {
      id: 0,
      respuesta: 'Una matríz inversa',
    }
  ]
  R2Gauss = [
    {
      id: 1,
      respuesta: 'Montante',
    },
    {
      id: 1,
      respuesta: 'Cofactores',
    },
    {
      id: 1,
      respuesta: 'Eliminación Gaussiana',
    }
  ]
  R3Gauss = [
    {
      id: 2,
      respuesta: 'x= -1 | y= 1/2 | z=5/2',
    },
    {
      id: 2,
      respuesta: 'x= -2 | y= 1/3 | z=4/2',
    },
    {
      id: 2,
      respuesta: 'x= 1 | y= -1/2 | z= -5/2',
    }
  ]



    //Data Eliminación Gaussiana
    PrEGaussiana = [
      {
        id:0,
        name: 'Eliminación Gaussiana',
        pregunta: '1.- ¿Qué se obtiene al del proceso del método?'
      },
      {
        id:1,
        name: 'Eliminación Gaussiana',
        pregunta: '2.- Cuales son algunas operaciones de renglón que se aplican en el método '
      },
      {
        id:2,
        name: 'Eliminación Gaussiana',
        pregunta: '3.- Resuelve la siguiente matriz: 3x - y + 4z = 2 | -5x + 3y - 7z = 0 | 7x - 4y + 4z = 12'
      }
    ]
         //Respuestas Eliminación Gaussiana
  R1EGaussiana = [
    {
      id: 0,
      respuesta: 'Una matriz tirangular',
    },
    {
      id: 0,
      respuesta: 'Una matriz fila',
    },
    {
      id: 0,
      respuesta: 'Una matriz identidad',
    }
  ]
  R2EGaussiana = [
    {
      id: 1,
      respuesta: 'Sumar o restar un múltiplo de una ecuación a otra.',
    },
    {
      id: 1,
      respuesta: 'Intercambiar de posición dos ecuaciones.',
    },
    {
      id: 1,
      respuesta: 'Todas las anteriores.',
    }
  ]
  R3EGaussiana = [
    {
      id: 2,
      respuesta: 'x= -1 | y= 1/2 | z=5/2',
    },
    {
      id: 2,
      respuesta: 'x= -2 | y= 1/3 | z=4/2',
    },
    {
      id: 2,
      respuesta: 'x= 4 | y= -2 | z= 5',
    }
  ]

    
    //Data Gauss-Seidel
    PrGaussSeidel = [
      {
        id:0,
        name: 'Gauss-Seidel',
        pregunta: '1.- ¿Se puede utilizar un número menor a la suma de los elementos de la fila en la diagonal principal?'
      },
      {
        id:1,
        name: 'Gauss-Seidel',
        pregunta: '2.- ¿Qué fórmula se usa para obtener el margen de error?'
      },
      {
        id:2,
        name: 'Gauss-Seidel',
        pregunta: 'Resuelve la siguiente matriz: x - 3y + 5z = 5 | 8x - y - z = 8 | -2x + 4y + z = 4'
      }
    ]
            //Respuestas Gauss-Seidel
  R1GaussSeidel = [
    {
      id: 0,
      respuesta: 'Si',
    },
    {
      id: 0,
      respuesta: 'No',
    }
  ]
  R2GaussSeidel = [
    {
      id: 1,
      respuesta: 'e= |xi+1|',
    },
    {
      id: 1,
      respuesta: 'e= |xi+1-xi|',
    },
    {
      id: 1,
      respuesta: 'e= |xi+1+1|',
    }
  ]
  R3GaussSeidel = [
    {
      id: 2,
      respuesta: 'x= 1.350784375 | y= 1.298292188 | z= 1.508818438',
    },
    {
      id: 2,
      respuesta: 'x= .350784375 | y= 3.298292188 | z= 2.508818438',
    },
    {
      id: 2,
      respuesta: 'x= -1.350784375 | y= 2.298292188 | z= 1.508818438',
    }
  ]
    //Data Jacobi
    PrJacobi = [
      {
        id:0,
        name: 'Jacobi',
        pregunta: '1.- ¿Se puede acabar el problema con tan solo obtener un margen de error requerido en tan solo una variable?'
      },
      {
        id:1,
        name: 'Jacobi',
        pregunta: '2.- ¿Se puede resolver el problema si la suma de los elementos de la fila da igual al elemento de la diagonal principal?'
      },
      {
        id:2,
        name: 'Jacobi',
        pregunta: '3.- Resuelve la siguiente matriz: x - 3y + 5z = 5 | 8x - y - z = 8 | -2x + 4y + z = 4'
      }
    ]
              //Respuestas Jacobi
  R1Jacobi = [
    {
      id: 0,
      respuesta: 'Si',
    },
    {
      id: 0,
      respuesta: 'No',
    }
  ]
  R2Jacobi = [
    {
      id: 1,
      respuesta: 'Si',
    },
    {
      id: 1,
      respuesta: 'No',
    }
  ]
  R3Jacobi = [
    {
      id: 2,
      respuesta: 'x= 1.350950195 | y= 1.297855469 | z= 1.508757813',
    },
    {
      id: 2,
      respuesta: 'x= .350784375 | y= 3.298292188 | z= 2.508818438',
    },
    {
      id: 2,
      respuesta: 'x= -1.350784375 | y= 2.298292188 | z= 1.508818438',
    }
  ]
  
    value: string;
  
    Montante(){
      this.value = 'Montante';
    }
  
    GaussJordan(){
      this.value = 'GaussJordan';
    }
  
    Gaussiana(){
      this.value = 'Gaussiana';
    }
  
    GaussSeidel(){
      this.value = 'GaussSeidel';
    }
  
    Jacobi(){
      this.value = 'Jacobi';
    }
    
    Todos(){
      this.value = 'Todos';
    }

  constructor() { }


}
