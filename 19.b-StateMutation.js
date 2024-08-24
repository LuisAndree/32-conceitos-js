const user = {
    name: "Alice",
    age: 25,
    address: {
        city: "New York",
        street: "5th Avenue"
    }
};

// 1. Mutação de estado (não recomendada)
function updateUserAge(mutatedUser, newAge) {
    mutatedUser.age = newAge; 
    return mutatedUser;
}

const updatedUser1 = updateUserAge(user, 26);
console.log('Mutação de Estado - Usuário Atualizado:', updatedUser1); 
console.log('Mutação de Estado - Objeto Original:', user); 


// 2. Evitando mutação de estado com imutabilidade
function updateUserAgeImmutably(immutableUser, newAge) {
    return {
        ...immutableUser, 
        age: newAge       
    };
}

const updatedUser2 = updateUserAgeImmutably(user, 27);
console.log('Imutabilidade - Usuário Atualizado:', updatedUser2); 
console.log('Imutabilidade - Objeto Original:', user); 

// 3. Imutabilidade com objetos aninhados
function updateUserCityImmutably(immutableUser, newCity) {
    return {
        ...immutableUser, 
        address: {        
            ...immutableUser.address, 
            city: newCity 
        }
    };
}

const updatedUser3 = updateUserCityImmutably(user, "Los Angeles");
console.log('Imutabilidade - Cidade Atualizada:', updatedUser3); 

console.log('Imutabilidade - Objeto Original:', user); 
