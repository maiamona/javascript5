function getDiaSemanaTexto(diaSemana2) {
    let diaSemanaTexto;

    switch (diaSemana2) {
        case 0:
            diaSemanaTexto = 'Domingo';   
            break;
        case 1:
            diaSemanaTexto = 'Segunda-feira';   
            break;
        case 2:
            diaSemanaTexto = 'Terça-feira';   
            break;
        case 3:
            diaSemanaTexto = 'Quarta-feira';   
            break;
        case 4:
            diaSemanaTexto = 'Quinta-feira';   
            break;
        case 5:
            diaSemanaTexto = 'Sexta-feira';   
            break;
        case 6:
            diaSemanaTexto = 'Sabado';   
            break;
    
        default:
            diaSemanaTexto = 'Erro de pogramação'; 
            break;
    }
    return diaSemanaTexto;
}

// const data = new Date('1987-01-17 00:00:00');
const data = new Date();
let diaSemana = data.getDay();
// diaSemana = 7;
let diaSemanaTexto = getDiaSemanaTexto(diaSemana);

/*
if (diaSemana === 0) {//em javascript dia da semana começa do '0', mais vamos mudar com este codigo
  diaSemanaTexto = 'Domingo';
} else if (diaSemana === 1) {
    diaSemanaTexto = 'Segunda';
  }else if (diaSemana === 2) {
    diaSemanaTexto = 'Terça';
  }else if (diaSemana === 3) {
    diaSemanaTexto = 'Quarta';
  }else if (diaSemana === 4) {
    diaSemanaTexto = 'Quinta';
  }else if (diaSemana === 5) {
    diaSemanaTexto = 'Sexta';
  }else if (diaSemana === 6) {
    diaSemanaTexto = 'Sabado';
  }
*/

// switch (diaSemana) {
//     case 0:
//         diaSemanaTexto = 'Domingo';   
//         break;
//     case 1:
//         diaSemanaTexto = 'Segunda';   
//         break;
//     case 2:
//         diaSemanaTexto = 'Terça';   
//         break;
//     case 3:
//         diaSemanaTexto = 'Quarta';   
//         break;
//     case 4:
//         diaSemanaTexto = 'Quinta';   
//         break;
//     case 5:
//         diaSemanaTexto = 'Sexta';   
//         break;
//     case 6:
//         diaSemanaTexto = 'Sabado';   
//         break;

//     default:
//         diaSemanaTexto = 'Erro de pogramação'; 
//         break;
// }


console.log(diaSemana, diaSemanaTexto); 