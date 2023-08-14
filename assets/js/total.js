const boton = document.getElementById("boton");

boton.addEventListener("click", validar);

function validar() {
   let cantidad1 = Number(document.querySelector("#check1").value);
   let cantidad2 = Number(document.querySelector("#check2").value);
   let cantidad3 = Number(document.querySelector("#check3").value);
   let resultado = document.querySelector("#cuenta");

   let total = cantidad1 + cantidad2 + cantidad3;

   if (total < 10) {
      resultado.innerHTML = "Llevas " + total + " stickers, puedes agregar mas ;)";
   } else if (total == 10) {
      resultado.innerHTML = "Llevas " + total + " stickers, perfecto :D";
   } else {
      resultado.innerHTML = "Llevas " + total + " stickers, son demasiados! Solo puedes llevar 10 stickers en total..";
   }
}
