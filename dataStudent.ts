// Creacion de un estudiante a partir de la clase student

// Importamos la clase course de los scripts
import { Student } from './student.js';

// Lista de cursos tomados
export const student = new Student("Julian Padilla Molina", "201913677", "1007624225", 19, "Cra 9 #29-109", "3222102331");
// Lista de llaves para los valores
export const keyStudent: Array<string> = ['Código', 'Cédula', 'Edad', 'Direccíon', 'Telefono'];