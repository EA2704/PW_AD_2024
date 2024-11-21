function saludar(){
    let salida = document.getElementById("salida_boton");
    salida.innerText = "Hola desde la función saludar";
}

let otro_boton = document.getElementById("otro_boton");

otro_boton.addEventListener("click",
    function(){
        let salida = document.getElementById("salida_otro");
        salida.innerText = "Otro saludo 😎";
});

otro_boton.addEventListener("mouseenter", function(){
    this.innerText = " Entró el mouse";
});

otro_boton.addEventListener("mouseleave", function(){
    this.innerText = " Salió el mouse";
});

otro_boton.addEventListener("mouseover", function(){
    this.innerText = " 🐭";
});

let nombreText = document.getElementById("nombre");
let salida_teclado = document.getElementById("salida_teclado");

nombreText.addEventListener("keydown", function(event){
    salida_teclado.innerHTML = `Se presionó <kbd>${event.key}</kbd>`;
});

let miform = document.getElementById("miform");
miform.addEventListener("submit", function(event){
    event.preventDefault();


let aTxt = document.getElementById("a");
let bTxt = document.getElementById("b");

let salida = document.getElementById("salida_suma");
let a = parseInt(aTxt.value);
let b = parseInt(bTxt.value);
let resultado = a + b;
salida.innerText = resultado;

});