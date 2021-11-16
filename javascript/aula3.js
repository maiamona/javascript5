// try {
    
//     console.log(falha);
// } catch (error) {
//     console.log('falha não existe');
//     console.log(error);
// }

// function soma(x, y) {
//     if (typeof x !== 'number' || typeof y !== 'number') {
//        throw('x e y presisam ser numeros');
//     }
//     return x + y;
// }

// function soma(x, y) {
//     if (typeof x !== 'number' || typeof y !== 'number') {
//        throw new Error('x e y presisam ser numeros');
//     }
//     return x + y;
// }

function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new ReferenceError('x e y presisam ser numeros');
        // throw new TypeError('x e y presisam ser numeros');
        
    }
    return x + y;
}

try {
    
    console.log(soma(3, 4));
    console.log(soma('3', 4));
} catch (error) {
  //console.log(error);  //o usuario final não pode ver este erro
  console.log('alguma coisa mais amigavel pro usuario');
}

