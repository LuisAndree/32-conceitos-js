function* numberGenerator() {
    yield 1;
    yield 2;
    yield 3;
    return 'Done';
}

const gen = numberGenerator();

console.log(gen.next()); 
console.log(gen.next());
console.log(gen.next()); 
console.log(gen.next()); 
console.log(gen.next()); 

function* infiniteSequence() {
    let i = 0;
    while (true) {
        yield i++;
    }
}

const infiniteGen = infiniteSequence();

console.log(infiniteGen.next().value); 
console.log(infiniteGen.next().value); 
console.log(infiniteGen.next().value); 
console.log(infiniteGen.next().value); 

function* range(start, end) {
    for (let i = start; i <= end; i++) {
        yield i;
    }
}

for (let value of range(1, 5)) {
    console.log(value);
}

function* fetchData() {
    const data1 = yield 'Fetching first data...';
    console.log('Data 1:', data1);

    const data2 = yield 'Fetching second data...';
    console.log('Data 2:', data2);

    return 'All data fetched!';
}

const dataGen = fetchData();

console.log(dataGen.next().value); 
console.log(dataGen.next('First Data Result').value); 
console.log(dataGen.next('Second Data Result').value); 
