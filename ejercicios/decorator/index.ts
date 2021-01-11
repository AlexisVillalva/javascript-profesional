class Field{
    errors : string[]
    input: HTMLInputElement

    constructor(input:HTMLInputElement){
        this.input=input
        this.errors=[]

        let errorMessage = document.createElement('p')
        errorMessage.className='text-danger'
        this.input.parentNode.insertBefore(errorMessage,this.input.nextSibling)

        this.input.addEventListener('input',()=>{
            this.errors=[]
            this.validate()
            errorMessage.innerText=this.errors[0]||''
        })
    }
    validate(){}
}

function RequiredFieldDecorator(field:Field): Field{
    // decorador para un campo requisito

    // guardar la funcion de validacion original
    let validate = field.validate;
    // nuevo valor de la funcion field.validate, de la INSTANCIA
    field.validate = function(){
        validate();
        let value = field.input.value;
        if(!value){
            field.errors.push("Requerido")
        }
    }
    return field
}

function EmailFieldDecorator(field:Field): Field{
    // decorador para un campo requisito

    // guardar la funcion de validacion original
    let validate = field.validate;
    // nuevo valor de la funcion field.validate, de la INSTANCIA
    field.validate = function(){
        // ejecutamos la funcion de validacion anterior, que pusimos en algun decorador anterior
        validate();
        let value = field.input.value;
        if(value.indexOf("@") === -1){
            field.errors.push("Debe ser un email")
        }
    }
    return field
}

let field = new Field(document.querySelector('#email'))
field = RequiredFieldDecorator(field);
field = EmailFieldDecorator(field);