function Calcular(){
    debugger
    let RA = parseInt(document.getElementById("InputRA").value);
    let nome = document.getElementById("InputNome").value;
    let nota1 = parseInt(document.getElementById("InputNota1").value);
    let nota2 = parseInt(document.getElementById("InputNota2").value);
    let nota3 = parseInt(document.getElementById("InputNota3").value);
    let nota4 = parseInt(document.getElementById("InputNota4").value);
    let media = parseInt(document.getElementById("InputMedia").value);

    if(nota1<0 || nota1>10){
        alert("Nota maior que 10 ou menor que 0");
        document.getElementById("InputNota1").value="";
        document.getElementById("InputNota1").focus();
        nota1 = "";
    }
    if(nota2<0 || nota2>10){
        alert("Nota maior que 10 ou menor que 0");
        document.getElementById("InputNota2").value="";
        document.getElementById("InputNota2").focus();
        nota2 = "";
    }
    if(nota3<0 || nota3>10){
        alert("Nota maior que 10 ou menor que 0");
        document.getElementById("InputNota3").value="";
        document.getElementById("InputNota3").focus();
        nota3 = "";
    }
    if(nota4<0 || nota4>10){
        alert("Nota maior que 10 ou menor que 0");
        document.getElementById("InputNota4").value="";
        document.getElementById("InputNota4").focus();
        nota4 = "";
    }
    if(media<0 || media>10){
        alert("Media maior que 10 ou menor que 0");
        document.getElementById("InputMedia").value="";
        document.getElementById("InputMedia").focus();
        media = "";
    }

    let MA = (nota1 + nota2*2 + nota3*3 + nota4*4 + media)/11

    let conceito;

    if(MA >=9.0){
        conceito = "A";
    }else if(MA >=7.5){
        conceito = "B";
    }else if(MA >=6.0){
        conceito = "C";
    }else if(MA >=4.0){
        conceito = "D";
    }else{
        conceito ="E";
    }

    let situacao;
    if(conceito=="A" || conceito=="B" || conceito=="C"){
        situacao = "Aprovado";
    }else{
        situacao = "Reprovado"
    }

    let resp = "Nome:" + nome + "<br>" +
                "RA:a" + RA + "<br>" +
                "Notas" + nota1 + ";" + nota2 + ";" + nota3 + ";" + nota4 + ";" + media + "<br>" +
                "Conceito:" + conceito + "<br>" +
                "Situacao:" + situacao;

    document.getElementById("Resp").innerHTML= resp;
}