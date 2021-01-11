class Singleton{
    private static instance: Singleton;

    private constructor(){
        // init
    }

    static getInstance(){
        // obtenemos la instancia, si no existe, la creamos.
        console.log(Singleton.instance);
        if(!Singleton.instance){
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
}
export default Singleton;