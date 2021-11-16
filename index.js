/**
 * operadores de comparação <, > <=, >=
 * == igualdade (checa valor) - não utilizamos muito
 * === igualdade extrita (checa valor e tipo)
 * != diferente (checa valor) - não utilizamos muito
 * !== diferente extrito (checa valor e tipo)
 * 
 */

// = atribuição

/**
 * operadores logicos
 * &&, ||, !
 */
/*
const usuario = 'Luiz';
const senha = '123456';

const vaiLogar = usuario === 'Luiz' && senha === '123456';// true && true vai dar true

console.log(vaiLogar);
console.log(!true);// '!' - nega a expressão
console.log(!!true);
// console.log(true && true && true && true); 

/**
 * && -> false && true -> "o valor mesmo"
 * || ->
 * valores que avalião em falso - FALSY
 * 1- false - valor literal 'false'
 * 2- '0'
 * 3 - "" ou ''
 * 4- null, undefined, NaN
 */
// console.log('Luiz otávio' && 0 && 'Maria');
// console.log('Luiz otávio' && true && 'Maria');
// console.log('Luiz otávio' && true && NaN);
// console.log('Luiz otávio' && false && NaN);
// console.log('Luiz otávio' && "" && NaN);
// console.log('Luiz otávio' && '' && NaN);
// console.log('Luiz otávio' && null && NaN);
// console.log('Luiz otávio' && undefined && NaN);
// console.log('Luiz otávio' && 'Maria');
// console.log('Luiz otávio' && '' && 'Maria');

// function falaOi() {
//     return 'oi';
// }

// const vaiExecutar = 'joãozinho';
// console.log(vaiExecutar && falaOi());

console.log(0 || false || "" || null || '' || undefined || NaN || "Mona" || true);

// const corUsuario = null;
const corUsuario = 'vermelho';
const corPadrao = corUsuario || 'preto';
console.log(corPadrao);

const a = 0;
const b = null;
const c = undefined;
const d = false;
const e = NaN;
console.log(a || b || c || d || e);//sempre que todas forem 'false' o resultado sera da ultima 'false'

console.log(a || b || 'Tina' || c || d || e);

const tenhoGrana = NaN; //ou qualquer valor negativo

if (tenhoGrana) {
    console.log('vou sair de casa');
} else{
    console.log('Não vou sair de casa');
}