var s1 = document.getElementById('select-1'); 
var valor1 = s1.options[s1.selectedIndex].value;
let label=document.getElementById('resposta');


fetch("https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL").then(resposta=>{
    return resposta.json()
    
}).then(corpo=>{
    console.log (corpo)
    if(valor1=="u"){     
        label.append (corpo.USDBRL.code," ",corpo.USDBRL.bid);
    }else {          
        label.append (corpo.EURBRL.code," ",corpo.EURBRL.bid);
    }
     
})