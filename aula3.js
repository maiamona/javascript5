// (condição) ? 'Valor para verdadeiro' : 'Valor para falso';-pode ou não utilizar os parenteses na condição, vai depender como esta constituida a sua condição, nesse caso não utilizamos os parenteses na nossa condição
const pontuacaoUsuario = 1000;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuario VIP' : 'Usuario normal';

// if (pontuacaoUsuario >= 1000) {
//     console.log('Usuario VIP');
// } else{
//     console.log('Usuario normal');
// }
console.log(nivelUsuario);

//const tresHoras = 60 * 60 * 3 * 1000;//1000 - são 1000 segundos
// const umDia = 60 * 60 * 24 * 1000;
//const data = new Date(0 + umDia);// 01/01/1970 Timestamp unix ou época unix, se quisernos uma data mais antiga utilizamos um valor negativo ex. const data = new Date(-100);
// const data = new Date(0 + tresHoras);
/*
const data = new Date();//'new Date();' - sera a nossa função construtora
*/

//const data = new Date(2021, 3, 20, 15, 14, 27, 999);// resultado será 'Tue Apr 20 2021 15:14:27 GMT+0100 (GMT+01:00)', os ultimos '999' não podemos utilizar 1000 porque não existe 1000 milessimos de segundos, em javascript o mes começa do zero por isso nós temos o mes de 'Apr'
//const data = new Date('2019-04-20T20:20:59');// ou const data = new Date('2019-04-20 20:20:59');
 const data = new Date();
//const data = new Date(1636386346877);// pegando o resultado de 'Date.now() ou valor dos milessimos de segundos'
console.log(data.toString()); 
console.log('Dia da semana', data.getDay()); // 0 - Domingo, 6 - Sábado
console.log('Dia', data.getDate()); 
console.log('Mes', data.getMonth() + 1);//porque em javascript comesam do array '0' por isso temos que somar 'data.getMonth() + 1', Mês começa do zero
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('ms', data.getMilliseconds());
//console.log(Date.now());//resultado sera 1636386346877

function formataData(data) {
    // console.log(data);
    const dia = zeroAEsquerda(data.getDate());
    // const diaDaSemana = data.getDay();
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());
    const ms = zeroAEsquerda(data.getMilliseconds());
    const hora = zeroAEsquerda(data.getHours());
    // const mes2 = mes < 10? '0' + mes : mes;
    // const dia2 = dia < 10? '0' + dia : dia;

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}:${ms}`;
}

const data2 = new Date();
const dataLuanda = formataData(data2);
console.log(dataLuanda);

function zeroAEsquerda(num) {
    return num >=10 ? num : `0${num}`
}