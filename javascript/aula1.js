function epaisagem(largura, altura) {
    return largura > altura ? true : false;
}

function epaisagem2(largura, altura) {
    return largura > altura;
}

let epaisagem3 = (largura, altura) => largura > altura;



console.log(epaisagem(1920, 1080));
console.log(epaisagem2(1920, 1080));
console.log(epaisagem3(1920, 1080));

// ver quanto mede a largura e a altura de uma imagem em javasript

/**
 * var img = document.getElementById('imageid'); 
//or however you get a handle to the IMG
var width = img.clientWidth;
var height = img.clientHeight;
 */

/**
 * function mostra(){
var altura = document.getElementById("img").height;
var largura = document.getElementById("img").width;
alert("Altura: "+altura+"\nLargura: "+largura);
}
window.onload = mostra;
 */