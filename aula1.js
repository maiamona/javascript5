
setTimeout(function() {
    location.reload();
    
}, 30000);
var msg=window.document.getElementById('msg');

var data=new Date();
var hora = data.getHours();
var min =data.getMinutes();
var minutos = min < 10? '0' + min : min;

msg.innerHTML=`Agora são <strong>${hora} : ${minutos}</strong> `
if(hora >=5 && hora <12){
    msg.innerHTML+=` - bom dia para ti`
    
    document.body.style.backgroundColor = "#e8da8c";
} else if(hora >=12 && hora <19){
    msg.innerHTML+=` - boa tarde para ti`
    
    document.body.style.backgroundColor = '#f5821f';
} else if( hora >=19 &&  hora < 23){
    msg.innerHTML+=` - boa noite para ti`
    
    document.body.style.backgroundColor = '#3e3535';
} else if(hora >=0 && hora <5){
    msg.innerHTML+=` - boa noite para ti ja passa da meia noite`
     
    document.body.style.backgroundColor = '#3e3535';
}