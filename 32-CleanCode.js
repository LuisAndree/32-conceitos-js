// Princípios de Clean Code em JavaScript

// 1. Nomes Significativos
const MAXIMUM_CONNECTIONS = 5;

function calculateAreaOfRectangle(width, height) {
    return width * height;
}

// 2. Funções Pequenas e Simples
function isAdult(age) {
    return age >= 18;
}

// 3. Evite Comentários Desnecessários
function calculateDiscount(price, discount) {
    // Aplica um desconto ao preço
    return price - price * discount;
}

// 4. Use Constantes e Evite Números Mágicos
const TAX_RATE = 0.08;

function calculateTotalPrice(price) {
    return price + (price * TAX_RATE);
}

// 5. DRY (Don't Repeat Yourself)
function calculateCircleArea(radius) {
    return Math.PI * Math.pow(radius, 2);
}

function calculateCylinderVolume(radius, height) {
    return calculateCircleArea(radius) * height; 
}

// 6. Evite Funções com Muitos Parâmetros
function createUser({ name, age, email }) {
    return {
        name,
        age,
        email
    };
}

const user = createUser({ name: "John Doe", age: 30, email: "john.doe@example.com" });

// 7. Manter o Código Pequeno e Organizado
import { calculateTotalPrice } from './financeUtils.js';
import { createUser } from './userUtils.js';

// 8. Lidando com Erros de Forma Clara
function getUser(id) {
    if (!id) {
        throw new Error('ID de usuário é obrigatório');
    }

    return { id, name: "John Doe" };
}

try {
    const user = getUser(1);
    console.log(user);
} catch (error) {
    console.error(error.message);
}

// 9. Eliminar Código Morto
function calculateShippingCost(weight) {
    if (weight <= 0) return 0;
    return weight * 2.5;
}

// 10. Evitar Uso de Variáveis Globais
function startApp() {
    const config = {
        apiUrl: "https://api.example.com",
        port: 3000
    };

    connectToApi(config.apiUrl);
}

function connectToApi(url) {
    console.log(`Conectando à API em ${url}`);
}

// 11. Modularidade e Reutilização
export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}

import { add, subtract } from './mathUtils.js';

const result = add(5, 3);
console.log(result); 

// 12. Coesão e Baixo Acoplamento
class Order {
    constructor(items, paymentMethod) {
        this.items = items;
        this.paymentMethod = paymentMethod;
    }

    calculateTotal() {
        return this.items.reduce((total, item) => total + item.price, 0);
    }

    processOrder() {
        const total = this.calculateTotal();
        this.paymentMethod.pay(total);
    }
}

class PaymentMethod {
    pay(amount) {
        console.log(`Pagamento de ${amount} realizado.`);
    }
}

const items = [{ name: "Item 1", price: 50 }, { name: "Item 2", price: 30 }];
const paymentMethod = new PaymentMethod();
const order = new Order(items, paymentMethod);
order.processOrder();

// 13. Manter as Funções Puras
function square(n) {
    return n * n;
}

console.log(square(5)); 
console.log(square(5)); 

// 14. Comentários Claros e Objetivos
function calculateInterest(principal, rate, time) {
    return principal * rate * time;
}

// 15. Evitar Complexidade Desnecessária
function isEven(number) {
    return number % 2 === 0;
}

console.log(isEven(4)); 
console.log(isEven(5)); 
