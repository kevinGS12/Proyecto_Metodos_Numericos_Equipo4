import { Component} from '@angular/core';

@Component({
  selector: 'app-unidad3',
  templateUrl: './unidad3.component.html',
  styleUrls: ['./unidad3.component.css']
})
export class Unidad3Component{
    //Data Montante
    PrMontante = [
      {
        name: 'Montante',
        pregunta: 'Pregunta sobre Montante',
        respuesta: 'test1'
      },
      {
        name: 'Montante',
        pregunta: 'Pregunta sobre Montante',
        respuesta: 'test2'
      },
      {
        name: 'Montante',
        pregunta: 'Pregunta sobre Montante',
        respuesta: 'test3'
      },
    ]
    //Data Gauss-Jordan
    PrGaussJordan = [
      {
        name: 'Gauss-Jordan',
        pregunta: 'Pregunta sobre Gauss-Jordan'
      },
      {
        name: 'Gauss-Jordan',
        pregunta: 'Pregunta sobre Gauss-Jordan'
      },
      {
        name: 'Gauss-Jordan',
        pregunta: 'Pregunta sobre Gauss-Jordan'
      }
    ]
    //Data Eliminación Gaussiana
    PrEGaussiana = [
      {
        name: 'Eliminación Gaussiana',
        pregunta: 'Pregunta sobre Eliminación Gaussiana'
      },
      {
        name: 'Eliminación Gaussiana',
        pregunta: 'Pregunta sobre Eliminación Gaussiana'
      },
      {
        name: 'Eliminación Gaussiana',
        pregunta: 'Pregunta sobre Eliminación Gaussiana'
      }
    ]
    //Data Gauss-Seidel
    PrGaussSeidel = [
      {
        name: 'Gauss-Seidel',
        pregunta: 'Pregunta sobre Gauss-Seidel'
      },
      {
        name: 'Gauss-Seidel',
        pregunta: 'Pregunta sobre Gauss-Seidel'
      },
      {
        name: 'Gauss-Seidel',
        pregunta: 'Pregunta sobre Gauss-Seidel'
      }
    ]
    //Data Jacobi
    PrJacobi = [
      {
        name: 'Jacobi',
        pregunta: 'Pregunta sobre Jacobi'
      },
      {
        name: 'Jacobi',
        pregunta: 'Pregunta sobre Jacobi'
      },
      {
        name: 'Jacobi',
        pregunta: 'Pregunta sobre Jacobi'
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
