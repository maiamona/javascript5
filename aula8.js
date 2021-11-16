// ...rest, ...spread
let a = 'A';// B
let b = 'B';// C
let c = 'C';// A

const letras = [b, c, a];
[a, b, c] = letras;

console.log(a, b, c);

// atribuição via desistruturada 
const numeros = [100, 200, 300, 400, 500, 600, 700, 800, 900];
const [primeiro, segundo, terceiro, ...resto] = numeros;
const [um, , tres, , cinco, , sete, , nove] = numeros;
const numeros2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
const [,[,,seis]] = numeros2;
const [lista1, lista2, lista3] = numeros2

console.log(um, tres, cinco, sete, nove);
console.log(primeiro, segundo, terceiro);
console.log(resto);
console.log(numeros2[1][2]);
console.log(seis);
console.log(lista3[2]);