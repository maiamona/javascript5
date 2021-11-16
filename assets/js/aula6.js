var diaAno = document.getElementById('data');

const data =new Date();

// ou podemos utilizar o codigo (ver na documentação)


const opcoes = {
    
    year: 'numeric', 
    month: 'long', 
    day: '2-digit' ,
    weekday: 'long'
    // dateStyle: 'full',
    // timeStyle: 'short',
};

diaAno.innerHTML = `${data.toLocaleDateString('pt-BR', opcoes)} ${data.toLocaleTimeString('en-US', { hour12: false })}`;
