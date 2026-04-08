function CalcularBruto(){
    debugger
    let tempo = parseInt(document.getElementById("InputHoras").value);
    let dias = parseInt(tempo/24);
    let horas = tempo - (dias*24);
    let tempoBruto = 0;
    if(dias==1 && horas==0){
        tempoBruto = 60;
    }else if(dias>=1){
        tempoBruto += horas*2.5 + 60;
    }else{
        let tempoC = tempo-1;
        tempoBruto = (tempoC * 2.5) + 5;
    }

    
        
        
    
    document.getElementById("ValorBruto").innerHTML=tempoBruto;

    return tempoBruto
}

function CalcularTotal(){
    debugger

    let tempoBruto = CalcularBruto()
    let tipoVeiculo = document.getElementById("InputVeiculo").checked;
    let frequencia = document.getElementById("InputFrequencia").checked;
    let valorPorte;
    let ValorTotal;

    if(tipoVeiculo){
        valorPorte = 0.25 * tempoBruto + tempoBruto;
    }else{
        valorPorte= tempoBruto;
    }

    if(frequencia){
        ValorTotal = valorPorte - (0.05 * valorPorte);
    }else{
        ValorTotal= valorPorte;
    }
    

    document.getElementById("ValorTotal").innerHTML=ValorTotal.toFixed(2);
}