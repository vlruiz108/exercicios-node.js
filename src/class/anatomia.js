class Person{
    constructor(name, occupation, age){
        this.name = name;
        this.occupation =occupation;
        this.age = age; 
    }

    hello(name, occupation, age){
        if(occupation == "dev"){
            return `Fala ${occupation} seu nome é ${name} e você tem ${age} anos`
        }else {
            return `Fala ${name} e você tem ${age} anos e sua profissão é ${occupation}`
        }
    }
}

const SegundaPessoa = new NewPerson('Mariane')

const Pessoa = new Person;

module.exports = Pessoa;

