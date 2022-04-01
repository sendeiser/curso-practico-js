//codigo del cuadrado
console.group("Cuadrado");
/* const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: "+ladoCuadrado+"cm");
 */
function perimetroCuadrado(lado){
    return lado*4+"cm";
}
perimetroCuadrado();
/* console.log("El perimetro del cuadrado es: "+perimetroCuadrado+"cm"); */

function areaCuadrado(lado){
    return lado*lado+"cm2";
}
/* console.log("El area del cuadrado es: "+areaCuadrado+"cm^2"); */
console.groupEnd()
//codigo del triangulo
console.group("Triangulo")
/* const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4; */

/* console.log(
    "Los lados del triangulo miden: "
    +ladoTriangulo1+"cm, "
    +ladoTriangulo2
    +"cm, "
    +baseTriangulo
    +"cm"
); */
/* const alturaTriangulo = 5.5;
console.log("La altura del triangulo es: "+alturaTriangulo+"cm");
 */
function perimetroTriangulo(lado1,lado2, base){
    var perimetro= lado1 + lado2 + base;
    return perimetro+"cm";
}
/* console.log("El perimetro del triangulo es: "+perimetroTriangulo+"cm");*/
function areaTriangulo(base,altura){
   return (base*altura) / 2+"cm2" ;
}
/* console.log("El area del triangulo es: "+areaTriangulo+"cm^2"); */
console.groupEnd();

//codigo del Circulo
console.group("Circulo");

/* const radioCirculo = 4; */
/* const diametroCirculo = radioCirculo * 2; */
const PI = Math.PI;
/* const perimetroCirculo = diametroCirculo * PI; */
/* const areaCirculo = (radioCirculo * radioCirculo) * PI; */

function diametroCirculo(radio){
    return radio * 2
}
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio) * PI;
    return Math.round(diametro) 
}
function areaCirculo(radio){
    return Math.round(radio * radio * PI);
}
/* console.log("El radio del circulo es: "+radioCirculo+"cm y el diametro es: "+diametroCirculo);
console.log("El perimetro del Circulo es: "+perimetroCirculo+"cm");
console.log("El area del Circulo es: "+areaCirculo+"cm^2"); */

console.groupEnd();

//Interactuamos con el HTML
function calcularPerimetroCuadrado(){
    const input = document.getElementById("input_cuadrado");
    const result = document.getElementById("resultadoCuadrado"); 
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    result.innerHTML = perimetro;
}
function calcularAreaCuadrado(){
    const input = document.getElementById("input_cuadrado");
    const result = document.getElementById("resultadoCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    
    result.innerHTML = area;
}
function calcularPerimetroTriangle()
{
    const ladoa = Number(document.getElementById("input_lado_a").value);
    const ladob = Number(document.getElementById("input_lado_b").value);
    const base = Number(document.getElementById("input_base").value);
    const result = document.getElementById("resultadoTriangulo");
    console.log("Lado A: " + ladoa+" Lado B: "+ladob+" Base: "+base)
    const perimetro = perimetroTriangulo(ladoa,ladob,base);
    result.innerHTML = perimetro;

}

function calcularAreaTriangle()
{
    const altura = document.getElementById("input_altura").value;
    const base = document.getElementById("input_base").value;
    const result = document.getElementById("resultadoTriangulo");

    const area = areaTriangulo(base,altura);

    result.innerHTML = area;
}
function calcularPerimetroCirculo()
{
    const radio = document.getElementById("input_radio").value;
    const result = document.getElementById("resultadoCirculo");

    const perimetro = perimetroCirculo(radio);

    result.innerHTML = perimetro;
}
function calcularAreaCirculo()
{
    const radio = document.getElementById("input_radio").value;
    const result = document.getElementById("resultadoCirculo");

    const area = areaCirculo(radio);

    result.innerHTML = area;
}
function calcularAlturaTriangle()
{
    const a = document.getElementById('input_lado_ia').value;
    const b = document.getElementById('input_lado_ib').value;
    const base = document.getElementById('input_base_i').value;
    const result = document.getElementById('resultadoIsosceles');
    
    if(a === b) 
    {
        resp = Math.sqrt((a**2) - ((base/2)**2)).toFixed(2);
    }
    else
    {
        resp ="No es Isósceles";
    }

    result.innerHTML = resp;
}