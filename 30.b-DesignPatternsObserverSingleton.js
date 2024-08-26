// 1. Observer Pattern
// O padrão Observer define uma dependência um-para-muitos entre objetos, de forma que quando um objeto muda de estado, todos os seus dependentes são notificados automaticamente.

// Criando a classe Subject (Assunto/Observável)
class Subject {
    constructor() {
        this.observers = []; 
    }

    addObserver(observer) {
        this.observers.push(observer);
    }

    removeObserver(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notifyObservers(message) {
        this.observers.forEach(observer => observer.update(message));
    }
}

class Observer {
    constructor(name) {
        this.name = name;
    }

    update(message) {
        console.log(`${this.name} recebeu a mensagem: ${message}`);
    }
}

const subject = new Subject();

const observer1 = new Observer('Observer 1');
const observer2 = new Observer('Observer 2');

subject.addObserver(observer1);
subject.addObserver(observer2);

subject.notifyObservers('Ação realizada no Subject'); 

subject.removeObserver(observer1);

subject.notifyObservers('Outra ação realizada no Subject'); 

// 2. Singleton Pattern
// O padrão Singleton garante que uma classe tenha apenas uma instância e fornece um ponto de acesso global para ela.

// Criando uma classe Singleton
class Singleton {
    constructor() {
        if (Singleton.instance) {
            return Singleton.instance;
        }
        this.data = "Singleton Instance Data";
        Singleton.instance = this;
    }

    getData() {
        return this.data;
    }

    setData(data) {
        this.data = data;
    }
}

const singleton1 = new Singleton();
const singleton2 = new Singleton();

console.log(singleton1.getData()); 
singleton2.setData("Novo dado para a instância única");

console.log(singleton1.getData()); 
console.log(singleton1 === singleton2); 
