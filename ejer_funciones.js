 //Las funciones se declaran 1 vez.
function module3() {
    console.log(1);
    console.log(2);
    console.log(3);
};
module3();

  //Regresar una funcion
function unaFuncion() {
    console.log(1);
    return"Hola";
};
  const saludo = unaFuncion();
  console.log(saludo);


//Parametros en una funcion
function suma(a, b) {
    return a + b;
};
const resultado = suma(1989 + ' Milleniuns');
console.log(resultado)

//Funcion anonima a una variable
function suma(a, b) {
    return a + b;
}
const funcionAnonima = () => {
    console.log(1);
};
funcionAnonima();