function Calcular(){
    debugger
    let a = parseFloat(document.getElementById("InputA").value);
    let b = parseFloat(document.getElementById("InputB").value);
    let c = parseFloat(document.getElementById("InputC").value);

    let y = (b**2)-(4*a*c);
    
    let X1 = -b+ Math.sqrt(y)/(2*a);

    let X2 = -b- Math.sqrt(y)/(2*a);

    document.getElementById("SpanX1").innerHTML= X1;
    document.getElementById("SpanX2").innerHTML= X2;
}