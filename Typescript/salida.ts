console.log("Hola mundo!");

//NOTA!!! para evitar compilar con comandos en consola constantes, podemos usar 'nombre_del_archivo_'.ts -w asi ponemos en escucha a la consola.

//data types

var myString = "Hello World";
myString = 22 + ""; //Asi convertimos a string las variables de numeros, recordemos que no se puede cambiar el tipo de valor que ya se habia asignado a una variable previamente

var myNumber: number = 22;
//Para establecer el tipo de dato que se va a usar en la variable usamos    :    ejemplo =>   var myNumber:number = 22;

var myBool: boolean = true;

var myVar: any = "hello";
myVar = 22;
//Al usar   :any   dejamos abierta la posibilidad de reasignar el tipo de dato que usaremos en una variable

document.write(myString);
//Sintaxis usada para mostrar en el documento una variable

//ARRAYS

// var StringArray = ['', '', ''];
// StringArray = [1,2,3];
//Esta sintaxis marca error al no usar la asignacion de datos en la variable, para asignar el tipo de dato any y de cualquier otro tipo de dato se usa la siguiente sintaxis:

var AnyArray: any[] = ["", "", ""];
AnyArray = [true, 2, "Hello"];
var NumberArray: number[] = [1, 2, 3, 4];
var BoolArray: boolean[] = [true, false];

//TUPLE
//son arreglos con tipos de datos predefinidos

var strNumTuple: [string, number];
strNumTuple = ["Hello", 22];

//void, undefined , null

var myVoid: void = undefined;
var myNull: null = null;
var myUndefined: undefined = undefined;

//FUNCIONES

//Igual que los usos anteriores especificamos los tipos de valores que vamos a usar
function getSum(num1: number, num2: number): number {
  return num1 + num2;
}

//al obtener los parametros de una funcion, los convertimos a numeros
let mySum = function (num1: number | string, num2: number | string): number {
  if (typeof num1 === "string") {
    num1 = parseInt(num1);
  }
  if (typeof num2 === "string") {
    num2 = parseInt(num2);
  }
  return num1 + num2;
};

//el uso de   ?  nos permite establecer que el dato en el cual se uso, se establezca como opvcional
function getName(firstName: string, lastName?: string): string {
  if (lastName == undefined) {
    return firstName;
  }
  return `${firstName} ${lastName}`;
}

//funcion con tipo de dato void
function myVoidFunction(): void {
  return;
}

//INTERFACES

//Se usan para establecer tipos de objetos
interface ITodo {
  title: string;
  text: string;
}

function showToDo(
  todo: ITodo /*aqui establecemos la interfaz previamente declarada*/
) {
  console.log(`${todo.title} - ${todo.text}`);
}

//se puede usar tambien para variables
//al establecer la interfaz, el objeto es restrictivo, si tratamos de establecer otra key,nos muestra un error
let myToDo: ITodo = {
  title: "Eat dinner",
  text: "lorem" /*, description:'dsahjdbshaj'  esta parte nos da error al salir de los parametros de la interfaz*/,
};

//CLASES

class User {
  private name: string; //igual que protected se restringe el uso de dato
  public mail: string; //al usar public, permitimos que el dato sea abierto o publico
  protected age: number; //al usar protected restringimos el uso de ese dato

  constructor(name: string, email: string, edad: number) {
    this.name = name;
    this.mail = email;
    this.age = edad;
  }

  register() {
    console.log(`$[this.name] is registered!`);
  }

  showMeAge() {
    return this.age;
  }

  private ageInYears() {
    //al igual que con las keys del objeto, los metodos se pueden restringir
    return this.age + "years";
  }
}

var john = new User("John", 'dgshajfsa', 22);
