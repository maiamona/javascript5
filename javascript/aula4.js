
/*
try {
    //É executada quando não há erros
    // console.log(a);
    console.log('Abri um arquivo');
    console.log('Manipulei o arquivo e gerrou erro');
    console.log('Fechei o arquivo');
    try {
        console.log(b);
    } catch (error) {
        console.log('deu erro');
    }finally{
        console.log('também sou finaly');
    }
} catch (error) {
    //É executada quando há erros
    console.log('tratando um erro');
}finally{
    //será executado sempre
    console.log('FINALLY: eu sempre sou executado');
}
*/
/*
function retornaHora(data) {//'Date' é uma função construtora
    if (!(data instanceof Date)) {
        console.log('não é');
    }else{
        console.log('mona');
    }
}
*/

function retornaHora(data) {
    const tempo4 = {
        hour12: false,
         hour: '2-digit',
          minute:'2-digit',
          second:'2-digit',
          timeZone: 'UTC',
          timeZoneName: 'short'
    };

    if (data && !(data instanceof Date)) {
        throw new TypeError('esperando instancia de Date')
    }
    if (!data) {
       data = new Date(); 
    }
    return data.toLocaleTimeString('pt-BR', tempo4)
}


try {
    
    const data = new Date('01-01-1970 12:58:12');
    const hora = retornaHora(1);
    console.log(data);
    console.log(hora);
    
} catch (error) {
    //tratar erro
    // console.log(error);
}finally{
  console.log('tenha um bom dia');  
}


// retornaHora();
// const hora = retornaHora(new Date());
// const hora = retornaHora();