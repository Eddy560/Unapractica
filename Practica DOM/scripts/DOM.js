function cambiarTexto() {
    document.getElementById("ocultar").textContent = "¡Hola Mundo!";
}

var botoncolor = document.getElementById("botoncolor");
botoncolor.addEventListener("click", cambiarColor);

function cambiarColor() {
  var texticolor = document.getElementById("texticolor");
  texticolor.style.backgroundColor = "green";
}

const clickAlerta = (value) => {
  alert(`¡Haz hecho click! ${value}`);
  console.log("Logró entrar a la función");
}

function ocultar() {
  let textocultar = document.getElementById('textocultar');
  let oculmostrar = document.getElementById('oculmostrar');
  
  if (oculmostrar.textContent == 'Ocultar') {
      oculmostrar.textContent = 'Mostrar';
      textocultar.style.display='none';
  }
  else {
      oculmostrar.textContent = 'Ocultar';
      textocultar.style.display = 'block';
      textocultar.textContent = 'El texto se mostró nuevamente';
  } 
}