const boton = document.getElementById("boton");

boton.addEventListener("click", validar);

function validar() {
   let option1 = document.querySelector("#select1").value;
   let option2 = document.querySelector("#select2").value;
   let option3 = document.querySelector("#select3").value;
   let resultado = document.querySelector("#texto");

   const passwordOne = "911";
   const passwordTwo = "714";

   const passwordInput = option1 + option2 + option3;

   if (passwordInput == passwordOne) {
      resultado.innerHTML = "Password 1 correcto";
   } else if (passwordInput == passwordTwo) {
      resultado.innerHTML = "Password 2 correcto";
   } else {
      resultado.innerHTML = "Password incorrecta";
   }
}
