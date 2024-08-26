// 1. Busca Linear (Linear Search)
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; 
        }
    }
    return -1; 
}

console.log("Linear Search:", linearSearch([10, 20, 30, 40, 50], 30)); 

// 2. Busca Binária (Binary Search)
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1; 
}

console.log("Binary Search:", binarySearch([10, 20, 30, 40, 50], 30)); 

// 3. Ordenação por Bolha (Bubble Sort)
function bubbleSort(arr) {
    let n = arr.length;
    let swapped;

    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]; 
                swapped = true;
            }
        }
    } while (swapped);

    return arr;
}

console.log("Bubble Sort:", bubbleSort([64, 34, 25, 12, 22, 11, 90])); 

// 4. Ordenação por Inserção (Insertion Sort)
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
    return arr;
}

console.log("Insertion Sort:", insertionSort([64, 34, 25, 12, 22, 11, 90])); 
