// const nome = 'Maiamona'

// let i = 0;

// while (i < nome.length) {
//     console.log(nome[i]);
//     i++;
// }

function random(min, max) {
    const r = Math.random() * (max - min) + min;
    // return r.toFixed();
    return Math.floor(r);
}

const min = 1;
const max = 50;
let rand = random(min, max);

// console.log(rand);

while (rand !== 10 ) {//apostou no numero '10' nos numeros de 1 a 50
    rand = random(min, max);
    console.log(rand);
}

// 'while' - significa enquanto, 'DO' - significa faça
console.log('-------------------------');
do {//'do while' - executa primeiro de pois ve a condição
    rand = random(min, max);
    console.log(rand);  
} while (rand !== 10 );