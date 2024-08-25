async function fetchData() {
    try {
        const response = await fakeApiRequest(); 
        console.log('Dados recebidos:', response);
    } catch (error) {
        console.error('Erro ao buscar os dados:', error);
    }
}

function fakeApiRequest() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true; 

            if (success) {
                resolve({ data: 'Aqui estão os dados' });
            } else {
                reject('Falha ao buscar dados.');
            }
        }, 2000);
    });
}

fetchData();

async function fetchMultipleData() {
    try {
        const [data1, data2] = await Promise.all([fakeApiRequest(), fakeApiRequest()]);
        console.log('Dados recebidos:', data1, data2);
    } catch (error) {
        console.error('Erro ao buscar múltiplos dados:', error);
    }
}

fetchMultipleData();

async function asyncReturnExample() {
    return 'Resultado retornado por uma função assíncrona';
}

asyncReturnExample().then(result => console.log(result)); 

async function processArray(array) {
    for (let item of array) {
        const result = await fakeApiRequest(); 
        console.log('Processando item:', item, 'Resultado:', result);
    }
}

processArray([1, 2, 3]);

async function main() {
    console.log('Início');
    await fetchData(); 
    console.log('Meio');
    await asyncReturnExample(); 
    console.log('Fim');
}

main();
