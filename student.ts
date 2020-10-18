// Clase student para modelar un estudiante
export class Student {
    name: string;
    code: string;
    identification: string;
    age: number;
    direction: string;
    phone: string;
  
    constructor(name: string, code: string, identification: string, age: number, direction: string, phone: string) {
      this.name = name;
      this.code = code;
      this.identification = identification;
      this.age = age;
      this.direction = direction;
      this.phone = phone;
    }
}      