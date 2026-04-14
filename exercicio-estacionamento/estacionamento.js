function CalcularBruto(){
    debugger

    let entrada = document.getElementById("InputHoraEntrada").value;
    let saida = document.getElementById("InputHoraSaida").value;

    if (!entrada || !saida) {
        alert("Preencha entrada e saída!");
        return;
    }

    let dataEntrada = new Date(entrada);
    let dataSaida = new Date(saida);

    if (dataSaida <= dataEntrada) {
        alert("Saída deve ser depois da entrada!");
        return;
    }

    let diferenca = dataSaida - dataEntrada;
    let tempo = diferenca / (1000 * 60 * 60);

    tempo = Math.ceil(tempo);

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

    document.getElementById("ValorBruto").innerHTML=tempoBruto.toFixed(2);

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