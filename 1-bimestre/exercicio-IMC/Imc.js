function Calcular(){
    debugger
    let Peso = parseFloat(document.getElementById("InputPeso").value);
    let Altura = parseFloat(document.getElementById("InputAltura").value);

    let imc = Peso / (Altura*Altura);

    if(imc< 18.5){
        Resp = "Abaixo do peso"
    }else if(imc<24.9){
        Resp = "Peso normal"
    }else if(imc<29.9){
        Resp = "Sobrepeso"
    }else if(imc<34.9){
        Resp = "Obesidade grau I"
    }else if(imc<39.9){
        Resp = "Obesidade grau II"
    }else{
        Resp = "Obesidade grau III"
    }

    document.getElementById("SpanResp").innerHTML=Resp;
}