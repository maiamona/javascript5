const verdadeira = true;

// reedeclarar uma variavel 'let' funciona quando ela esta dentro de um bloco ex. {... bloco}
/**
 * 'let' tem escopo de bloco{...bloco}
 * mais 'var' só tem escopo de função
 */
let nome = 'Luiz';//não estamos reedeclarando, estamos criando
var nome2 = 'Luiz';

if (verdadeira) {
    let nome = 'otavio';//não estamos reedeclarando, estamos criando
    var nome2 = 'mona';
    console.log(nome, nome2);

    if (verdadeira) {//expresão bloco alinhado
        console.log('ok');
    }
}
console.log(nome, nome2);
/**
 * ou
 * {
 *  let nome = 'otavio';
 * }
 * console.log(nome, nome2);
 */

//utilizando a 'var' e a 'function' vai ocorrer o host em javascript, elevando primeiro as 'var' depois as 'function' ex. 'var nome2 = 'Luiz';' e 'function name(params) {...}'