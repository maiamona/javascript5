// 'for' - especifico para objetos iteraveis
// tudo que tem indece é iteravel, nós podemos iterar sobre ela

// const nome = 'Mona Garcia';
const monthNames = ["janeiro", "fevereiro", "março", "abril", "maio", "junho",
"Julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
];

/*
const pessoa = {
    nome: 'Mona',
    sobrenome: 'Garcia',
    idade: 34,
    endereco: {
        rua: 'Saviana Ribeiro',//comente esta linha de codigo para visualizar o valor 'rua: r = 12345'
        numero: 20
    }
};
*/

// for (let i = 0; i < pessoa.length; i++) {
//     const element = pessoa[i];
//     console.log(element);
// }

/*
for (let i in pessoa){// podemos utilizar o 'for in' - para os objetos ex.{...}
    console.log(`${i}: ${pessoa[i]}`);
}
*/



/*
for(valor of monthNames){// neste caso não aparecera o indece, apenas o valor
console.log(valor);
}

/*
for(valor of nome){// neste caso não aparecera o indece, apenas o valor
    console.log(valor);
    }
    */

    monthNames.forEach(function(valor, indice, array) {
        console.log(valor, indice, array);
    });

    // 'for classico' - geralmente com iteraveis (array ou string)
    // 'for in' - retorna o indece ou chave (strings, array ou objetos)
    // 'for of' - retorna o valor em si (iteraveis, arrays ou strings)