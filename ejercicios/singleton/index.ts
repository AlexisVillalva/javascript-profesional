import Singleton from './singleton';

// en la primera linea, como no existe la instancia, la va a crear
const a = Singleton.getInstance();
// aqui, como ya existe, en este caso solo nos va a devolver la instancia
const b = Singleton.getInstance();

// por lo tanto, a y b van a ser exactamente igual, es la misma instancia.
a === b ? console.log("a y b son iguales") : console.log("No son iguales"); // "a y b son iguales"
