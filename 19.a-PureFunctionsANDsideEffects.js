// 1. Função pura: não depende de variáveis externas e não causa efeitos colaterais
function add(a, b) {
    return a + b;
}

const result1 = add(2, 3);
console.log('Função Pura - Resultado:', result1); 

// 2. Função com efeito colateral: modifica uma variável global
let globalVariable = 10;

function impureAdd(a, b) {
    globalVariable += a + b; 
    return globalVariable;
}

const result2 = impureAdd(2, 3);
console.log('Função Impura - Resultado:', result2); // Output: 15
console.log('Função Impura - Variável Global:', globalVariable); // Output: 15

// 3. Outro exemplo de função com efeito colateral: modificação de objeto externo
const externalObject = { value: 10 };

function modifyObject(obj, increment) {
    obj.value += increment; 
    return obj.value;
}

const result3 = modifyObject(externalObject, 5);
console.log('Efeito Colateral - Resultado:', result3); 
console.log('Efeito Colateral - Objeto Externo:', externalObject); 

// 4. Função pura com objetos: retorna um novo objeto sem modificar o original
function pureModifyObject(obj, increment) {
    return { ...obj, value: obj.value + increment }; 
}

const result4 = pureModifyObject(externalObject, 5);
console.log('Função Pura com Objetos - Resultado:', result4); 
console.log('Função Pura com Objetos - Objeto Externo:', externalObject); 
