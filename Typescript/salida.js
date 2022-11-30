console.log("Hola mundo!");
//NOTA!!! para evitar compilar con comandos en consola constantes, podemos usar 'nombre_del_archivo_'.ts -w asi ponemos en escucha a la consola.
//data types
var myString = "Hello World";
myString = 22 + ""; //Asi convertimos a string las variables de numeros, recordemos que no se puede cambiar el tipo de valor que ya se habia asignado a una variable previamente
var myNumber = 22;
//Para establecer el tipo de dato que se va a usar en la variable usamos    :    ejemplo =>   var myNumber:number = 22;
var myBool = true;
var myVar = "hello";
myVar = 22;
//Al usar   :any   dejamos abierta la posibilidad de reasignar el tipo de dato que usaremos en una variable
document.write(myString);
//Sintaxis usada para mostrar en el documento una variable
//ARRAYS
// var StringArray = ['', '', ''];
// StringArray = [1,2,3];
//Esta sintaxis marca error al no usar la asignacion de datos en la variable, para asignar el tipo de dato any y de cualquier otro tipo de dato se usa la siguiente sintaxis:
var AnyArray = ["", "", ""];
AnyArray = [true, 2, "Hello"];
var NumberArray = [1, 2, 3, 4];
var BoolArray = [true, false];
//TUPLE
//son arreglos con tipos de datos predefinidos
var strNumTuple;
strNumTuple = ["Hello", 22];
//void, undefined , null
var myVoid = undefined;
var myNull = null;
var myUndefined = undefined;
//FUNCIONES
//Igual que los usos anteriores especificamos los tipos de valores que vamos a usar
function getSum(num1, num2) {
    return num1 + num2;
}
//al obtener los parametros de una funcion, los convertimos a numeros
var mySum = function (num1, num2) {
    if (typeof num1 === "string") {
        num1 = parseInt(num1);
    }
    if (typeof num2 === "string") {
        num2 = parseInt(num2);
    }
    return num1 + num2;
};
//el uso de   ?  nos permite establecer que el dato en el cual se uso, se establezca como opvcional
function getName(firstName, lastName) {
    if (lastName == undefined) {
        return firstName;
    }
    return "".concat(firstName, " ").concat(lastName);
}
//funcion con tipo de dato void
function myVoidFunction() {
    return;
}
function showToDo(todo /*aqui establecemos la interfaz previamente declarada*/) {
    console.log("".concat(todo.title, " - ").concat(todo.text));
}
//se puede usar tambien para variables
//al establecer la interfaz, el objeto es restrictivo, si tratamos de establecer otra key,nos muestra un error
var myToDo = {
    title: "Eat dinner",
    text: "lorem" /*, description:'dsahjdbshaj'  esta parte nos da error al salir de los parametros de la interfaz*/
};
//CLASES
var User = /** @class */ (function () {
    function User(name, email, edad) {
        this.name = name;
        this.mail = email;
        this.age = edad;
    }
    User.prototype.register = function () {
        console.log("$[this.name] is registered!");
    };
    User.prototype.showMeAge = function () {
        return this.age;
    };
    User.prototype.ageInYears = function () {
        //al igual que con las keys del objeto, los metodos se pueden restringir
        return this.age + "years";
    };
    return User;
}());
var john = new User("John", 'dgshajfsa', 22);
