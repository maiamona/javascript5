/*
for (let i = 0; i < 6; i++) {//o bloco 'for' não tem ';' no final
   console.log('Linha ' + i);
    
}
*/
const monthNames = ["janeiro", "fevereiro", "março", "abril", "maio", "junho",
"Julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
];


// for (let i = 0; i <= 10; i++) {
//     const par = i % 2 === 0 ? 'par' : 'impar';
//     console.log( i, par); 
// }

for (let i = 0; i < monthNames.length; i++) {//'for' - classico 
    const element = monthNames[i];
    console.log(i, element);
}