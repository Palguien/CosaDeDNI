//main
//Pablo Pollos Iglesias
let dni=prompt("DNI:");
suma=0;
letra=dni[dni.length-1].toUpperCase;
for (let index = 0; index < dni.length-1; index++) {
    suma=suma+dni[index];
}
suma=suma%23;
letras=['T','R','W','A','G','M','Y','F','P','D','X','B',
    'N','J','Z','S','Q','V','H','L','C','K','E'];
if(dni.length==9 && letras[suma]==letra){
    alert("Todo correcto");
}else{
    alert("DNI incorrecto");
}