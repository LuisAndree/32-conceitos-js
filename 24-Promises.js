const myPromise = new Promise((resolve, reject) => {
    const success = true;

    if (success) {
        resolve('Promise resolvida com sucesso!');
    } else {
        reject('Houve um erro ao resolver a Promise.');
    }
});

myPromise
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error(error);
    })
    .finally(() => {
        console.log('Operação de Promise concluída.');
    });

const promiseChain = new Promise((resolve, reject) => {
    resolve(2);
});

promiseChain
    .then(value => {
        console.log(value);
        return value * 2;
    })
    .then(value => {
        console.log(value);
        return value * 2;
    })
    .then(value => {
        console.log(value);
    })
    .catch(error => {
        console.error('Erro no encadeamento de Promises:', error);
    });

const promise1 = new Promise(resolve => setTimeout(() => resolve('Primeira Promise resolvida'), 1000));
const promise2 = new Promise(resolve => setTimeout(() => resolve('Segunda Promise resolvida'), 2000));
const promise3 = new Promise(resolve => setTimeout(() => resolve('Terceira Promise resolvida'), 3000));

Promise.all([promise1, promise2, promise3])
    .then(results => {
        console.log('Resultados de todas as Promises:', results);
    })
    .catch(error => {
        console.error('Erro em uma das Promises:', error);
    });

Promise.race([promise1, promise2, promise3])
    .then(result => {
        console.log('Primeira Promise resolvida:', result);
    })
    .catch(error => {
        console.error('Erro na Promise.race:', error);
    });

function asyncFunctionWithCallback(callback) {
    setTimeout(() => {
        callback(null, 'Dados obtidos com sucesso!');
    }, 1500);
}

function asyncFunctionWithPromise() {
    return new Promise((resolve, reject) => {
        asyncFunctionWithCallback((error, result) => {
            if (error) {
                reject(error);
            } else {
                resolve(result);
            }
        });
    });
}

asyncFunctionWithPromise()
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error('Erro ao obter os dados:', error);
    });
