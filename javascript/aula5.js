function mostraHora() {
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

// console.log(mostraHora()); 

// function funcaoDoInterval() {
//     console.log(mostraHora());  
// }

// setInterval(funcaoDoInterval, 1000);

const timer = setInterval(function() {//intervalo dos segundos em uma função anonima
    console.log(mostraHora());  
}, 1000);

setTimeout(function () {//esperamos 10 segundos para o godigo parar
    clearInterval(timer);
}, 3000);

setTimeout(function () {
    console.log('ola mundo');
}, 5000)