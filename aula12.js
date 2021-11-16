// const monthNames = ["janeiro", "fevereiro", "março", "abril", "maio", "junho",
// "Julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
// ];
const pessoa = {
    nome: 'Mona',
    sobrenome: 'Garcia',
    idade: 34,
    endereco: {
        rua: 'Saviana Ribeiro',//comente esta linha de codigo para visualizar o valor 'rua: r = 12345'
        numero: 20
    }
};


// for (let i = 0; i < monthNames.length; i++) {
//     const element = monthNames[i];
//     console.log(element);
// }

/*
// 'for in' le os indices ou chaves do objeto
for (let i in monthNames){// 'for in', este 'for', utiliza-se muito quando tilizamos os 'objetos' ex. {...}
    console.log(monthNames[i]);
}
*/

/*
for (let i in pessoa){// neste caso nos pegamos as chaves
    console.log(i);
}
*/

for (let i in pessoa){// neste caso nos pegamos as chaves
    console.log(`${i}: ${pessoa[i]}`);
}


/*
const chave = 'nome';
console.log(pessoa.nome);
// console.log(pessoa['nome']);
console.log(pessoa[chave]);
*/
