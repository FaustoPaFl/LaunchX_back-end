// PILA  =============> LIFO(ULTIMAS ENTRADAS PRIMERAS SALIDAS)

class Pila{
    
    constructor(){
        this.pila = {};
        this.contador = 0;
    }

    //Mete elemento al final de la pila
    push(element){
        this.pila[this.contador] = element;
        this.contador++;
        return this.pila;
    }

    //saca el ultimo elemento y lo muestra
    pop(elemento){
        this.contador--;
        const element = this.pila[this.contador];
        delete this.pila[this.contador];
        return element;
    }

    //Solo muestra el ultimo elemento
    peek(){
        return this.pila[this.contador];
    }

    //Devuelve el tamaño de la pila
    size(){
        return this.contador;
    }

    print(){
        console.log(this.pila);
    }

};

const miPila = new Pila();

console.log(miPila.size());