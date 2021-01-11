interface Observer{
    update: (data: any) => void
}

interface Subject {
    subscribe: (observer: Observer) => void
    unsubscribe: (observer: Observer) => void
}

// utilizamos Subject en BitcoinPrice porque es el que va a estar realizando los cambios
// y le vamos a informar a los suscriptores sobre esos cambios.

class BitcoinPrice implements Subject {
    observers: Observer[] = [];

    constructor(){
        const valueInputEl: HTMLInputElement = document.querySelector("#value") ;
        valueInputEl.addEventListener("input", () => {
            this.notify(valueInputEl.value);
        })
    }

    subscribe(observer: Observer){
        this.observers.push(observer);

    }

    unsubscribe(observer: Observer){
        // tenemos que sacar al observer de la lista de observers para desuscribirlo

        // findIndex va a encontrar el observer en la lista de observers, verifica si es igual al
        // que le pasamos por parametro.
        const index = this.observers.findIndex(obs => {return obs === observer});

        // splice permite sacar al elemento del arreglo, le pasamos el indice y las posiciones que queremos retirar del arreglo a partir de este indice.
        this.observers.splice(index, 1);

        
    }

    // notifica a los observadores y actualiza con observer.update
    // input #value es el que va a utilizar este metodo
    notify(data: any){
        this.observers.forEach(observer => observer.update(data));
    }
}

class PriceDisplay implements Observer{

    private textElement: HTMLElement;

    constructor(){
        this.textElement = document.querySelector("#price");
    }
    
    // actualizar el valor del texto cuanado se llame el metodo update
    update(data: any){
        this.textElement.innerText = data;
    }
}

// crear las intancias de las clases
const value = new BitcoinPrice();
const display = new PriceDisplay();

// suscribir el display al valor
value.subscribe(display);

setTimeout(() => {
    // despues de 5 segundos desuscribimos al display. Esto hara que los cambios ya no se observen y ya no cambie el texto.
    value.unsubscribe(display);
}, 5000);