const pessoa = {
    nome: 'Mona',
    sobrenome: 'Garcia',
    idade: 34,
    endereco: {
        rua: 'Saviana Ribeiro',//comente esta linha de codigo para visualizar o valor 'rua: r = 12345'
        numero: 20
    }
};

// const nome = pessoa.nome;
//const { nome, sobrenome: nome2, ultimonome = 'Bastos', endereco: { rua: r = 12345, numero }, endereco } = pessoa// Atribuição via desestruturação, estrai do objeto o 'nome' e tambem cria uma variavel com nome 'nome', usar o 'ultimonome = 'Bastos'' tambem é feita com arrays
const { nome, ...resto } = pessoa
// console.log(nome, nome2, ultimonome, r, endereco);
console.log(nome, resto);