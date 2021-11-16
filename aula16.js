const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const numero of numeros) {
    if (numero === 2) {
        console.log('pulei o numero 2');
        continue;
    }

    console.log(numero);

    if (numero === 7) {
        console.log('7 encontrado, saindo...');
        break;
    }

    
}

console.log('--------------------------- 1');

for (const i in numeros) {
    let numero = numeros[i];
    if (numero === 2) {
        console.log('pulei o numero 2');
        continue;
    }

    console.log(numero);

    if (numero === 7) {
        console.log('7 encontrado, saindo...');
        break;
    }

    
}
console.log('--------------------------- 2');

for (let i = 0; i < numeros.length; i++) {
    let numero = numeros[i];
    if (numero === 2) {
        console.log('pulei o numero 2');
        continue;
    }

    console.log(numero);

    if (numero === 7) {
        console.log('7 encontrado, saindo...');
        break;
    }

    
}
console.log('--------------------------- 3');
let i = 0;
while ( i < numeros.length) {
    let numero = numeros[i];
    if (numero === 2) {
        console.log('pulei o numero 2');
        i++; //sempre que utilizar o 'while' e o 'continue;' temos que utilizar 'i++;' antes do 'continue;'
        continue;
    }

    console.log(numero);

    if (numero === 7) {
        console.log('7 encontrado, saindo...');
        i++; //sempre que utilizar o 'while' e o 'break;' temos que utilizar 'i++;' antes do 'break;'
        break;
    }

   i++; 
}
console.log('--------------------------- 4');
let i2 = 0;
do {
    let numero = numeros[i2];
    if (numero === 2) {
        console.log('pulei o numero 2');
        i2++; //sempre que utilizar o 'while' e o 'continue;' temos que utilizar 'i++;' antes do 'continue;'
        continue;
    }

    console.log(numero);

    if (numero === 7) {
        console.log('7 encontrado, saindo...');
        i2++; //sempre que utilizar o 'while' e o 'break;' temos que utilizar 'i++;' antes do 'break;'
        break;
    }

   i2++; 
}
while ( i2 < numeros.length);