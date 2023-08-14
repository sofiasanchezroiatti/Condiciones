const border = document.getElementById("imagen");

imagen.addEventListener("click", borderClick);

function borderClick() {
   const imagen = document.getElementById("imagen");

   if (imagen.style.border != "") {
      imagen.style.border = "";
   } else {
      imagen.style.border = "2px solid red";
   }
}
